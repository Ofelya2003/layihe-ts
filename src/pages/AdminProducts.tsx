import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import type { MovieType } from "../types";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/AdminProducts.css";
import { useL } from "../useL"; 

const AdminProducts = () => {
  const t = useL(); 
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const [formData, setFormData] = useState<Omit<MovieType, "id">>({
    title: "", price: 0, image: "", category: "", rating: 0, 
    year: new Date().getFullYear(), description: ""
  });

  const fetchMovies = async () => {
    const { data } = await supabase.from("movies").select("*").order("id", { ascending: false });
    if (data) setMovies(data);
  };

  useEffect(() => { 
    fetchMovies(); 
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const config = { background: "#111", color: "#fff", confirmButtonColor: "#fd6500" };

    if (isEditing && currentId) {
      const { error } = await supabase.from("movies").update(formData).eq("id", currentId);
      if (!error) Swal.fire({ ...config, title: t("Yeniləndi!", "Updated!", "Обновлено!"), icon: "success" });
    } else {
      const { error } = await supabase.from("movies").insert([formData]);
      if (!error) Swal.fire({ ...config, title: t("Əlavə edildi!", "Added!", "Добавлено!"), icon: "success" });
    }

    setFormData({ title: "", price: 0, image: "", category: "", rating: 0, year: 2026, description: "" });
    setIsEditing(false);
    setCurrentId(null);
    fetchMovies();
  };

  const startEdit = (movie: MovieType) => {
    setIsEditing(true);
    setCurrentId(movie.id);
    setFormData({ ...movie, description: movie.description || "" });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteMovie = async (id: number) => {
    Swal.fire({
      title: t("Əminsiniz?", "Are you sure?", "Вы уверены?"),
      text: t("Bu əməliyyat geri qaytarılmır!", "This action cannot be undone!", "Это действие нельзя отменить!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fd6500",
      cancelButtonColor: "#d33",
      confirmButtonText: t("Bəli, sil!", "Yes, delete!", "Да, удалить!"),
      cancelButtonText: t("Ləğv et", "Cancel", "Отмена"),
      background: "#111",
      color: "#fff"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await supabase.from("movies").delete().eq("id", id);
        fetchMovies();
        Swal.fire({
            title: t("Silindi!", "Deleted!", "Удалено!"),
            icon: "success",
            background: "#111",
            color: "#fff",
            confirmButtonColor: "#fd6500"
        });
      }
    });
  };

  return (
    <div className="admin-wrapper">
      <div className="container">
        
        {/* STATİSTİKA */}
        <div className="row mb-5" data-aos="fade-down">
          <div className="col-md-4 mb-3">
            <div className="stat-card">
              <h6 className="text-secondary text-uppercase mb-2">{t("Ümumi Filmlər", "Total Movies", "Всего фильмов")}</h6>
              <h2 className="fw-bold mb-0 text-white">{movies.length} <small className="h6 text-orange">{t("ədəd", "pcs", "шт")}</small></h2>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="stat-card">
              <h6 className="text-secondary text-uppercase mb-2">{t("Orta Reytinq", "Average Rating", "Средний рейтинг")}</h6>
              <h2 className="fw-bold mb-0 text-white">
                {(movies.reduce((acc, m) => acc + m.rating, 0) / (movies.length || 1)).toFixed(1)} <i className="fas fa-star text-warning h6"></i>
              </h2>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="stat-card-active">
              <h6 className="text-white-50 text-uppercase mb-2">{t("Panel Statusu", "Panel Status", "Статус панели")}</h6>
              <h2 className="fw-bold mb-0 text-white">{t("AKTİV", "ACTIVE", "АКТИВЕН")}</h2>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mb-5" data-aos="fade-up">
          <h3 className="fw-bold mb-4 text-uppercase border-start border-orange border-4 ps-3">
            {isEditing ? t("Filmi Yenilə", "Update Movie", "Обновить фильм") : t("Yeni Film Əlavə Et", "Add New Movie", "Добавить фильм")}
          </h3>

          <div className="card admin-form-card shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                <div className="col-md-4">
                  <label className="small text-secondary fw-bold text-uppercase mb-2">{t("Film Adı", "Movie Title", "Название фильма")}</label>
                  <input type="text" className="form-control custom-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                </div>
                <div className="col-md-2">
                  <label className="small text-secondary fw-bold text-uppercase mb-2">{t("Qiymət", "Price", "Цена")}</label>
                  <input type="number" className="form-control custom-input" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} required />
                </div>
                <div className="col-md-2">
                  <label className="small text-secondary fw-bold text-uppercase mb-2">IMDb</label>
                  <input type="number" step="0.1" className="form-control custom-input" value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} required />
                </div>
                <div className="col-md-2">
                    <label className="small text-secondary fw-bold text-uppercase mb-2">{t("İl", "Year", "Год")}</label>
                    <input type="number" className="form-control custom-input" value={formData.year} onChange={e => setFormData({...formData, year: Number(e.target.value)})} required />
                </div>
                <div className="col-md-2">
                    <label className="small text-secondary fw-bold text-uppercase mb-2">{t("Kateqoriya", "Category", "Категория")}</label>
                    <input type="text" className="form-control custom-input" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} required />
                </div>
                <div className="col-md-6">
                  <label className="small text-secondary fw-bold text-uppercase mb-2">{t("Poster URL", "Poster URL", "URL Постера")}</label>
                  <input type="text" className="form-control custom-input" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} required />
                </div>
                <div className="col-md-6">
                  <label className="small text-secondary fw-bold text-uppercase mb-2">{t("Məzmun", "Description", "Описание")}</label>
                  <input type="text" className="form-control custom-input" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                </div>
                <div className="col-12 mt-4 d-flex gap-3">
                  <button type="submit" className="btn btn-orange px-5 py-3 fw-bold text-uppercase">
                    {isEditing ? t("Yenilə", "Update", "Обновить") : t("Yadda Saxla", "Save", "Сохранить")}
                  </button>
                  {isEditing && (
                    <button type="button" className="btn btn-outline-secondary px-5 py-3" onClick={() => setIsEditing(false)}>{t("Ləğv et", "Cancel", "Отмена")}</button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* CƏDVƏL */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="fw-bold mb-4 text-uppercase border-start border-orange border-4 ps-3">{t("Filmlərin Siyahısı", "Movie List", "Список фильмов")}</h3>
          <div className="table-responsive admin-table-container shadow-lg">
            <table className="table table-dark table-hover m-0 align-middle">
              <thead>
                <tr className="text-secondary small text-uppercase" style={{backgroundColor: '#1a1a1a'}}>
                  <th className="ps-4 py-4">{t("Poster", "Poster", "Постер")}</th>
                  <th className="py-4">{t("Ad & Detallar", "Name & Details", "Имя и детали")}</th>
                  <th className="py-4">{t("Kateqoriya", "Category", "Категория")}</th>
                  <th className="py-4">{t("Qiymət", "Price", "Цена")}</th>
                  <th className="text-end pe-4 py-4">{t("Əməliyyat", "Action", "Действие")}</th>
                </tr>
              </thead>
              <tbody>
                {movies.map(movie => (
                  <tr key={movie.id}>
                    <td className="ps-4 py-3">
                      <img src={movie.image} className="rounded shadow" style={{width: '50px', height: '70px', objectFit: 'cover'}} alt="m" />
                    </td>
                    <td>
                      <div className="fw-bold text-white mb-1">{movie.title}</div>
                      <div className="small text-secondary">{movie.year} | <i className="fas fa-star text-warning"></i> {movie.rating}</div>
                    </td>
                    <td><span className="badge px-3 py-2" style={{backgroundColor: 'rgba(253, 101, 0, 0.1)', color: '#fd6500'}}>{movie.category}</span></td>
                    <td className="fw-bold text-orange">{movie.price} AZN</td>
                    <td className="text-end pe-4">
                      <div className="d-flex justify-content-end gap-2">
                        <button className="btn btn-outline-light btn-sm action-btn" onClick={() => startEdit(movie)}><i className="fas fa-pen"></i></button>
                        <button className="btn btn-outline-danger btn-sm action-btn" onClick={() => deleteMovie(movie.id)}><i className="fas fa-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminProducts;