import { useState } from "react";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useL } from "../../useL"; 

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const t = useL(); 

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isRegister) {
        
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        
        alert(t(
          "Qeydiyyat uğurludur! İndi giriş edə bilərsiniz.",
          "Registration successful! Now you can log in.",
          "Регистрация прошла успешно! Теперь вы можете войти."
        ));
        
        setIsRegister(false);
      } else {
        // GİRİŞ
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/"); 
      }
    } catch (error: any) {
      alert(error.message || t("Bir xəta baş verdi", "An error occurred", "Произошла ошибка"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "#080808" }}>
      <div className="auth-card p-4 p-md-5 rounded-4 shadow-lg border border-secondary" style={{ maxWidth: "450px", width: "100%", background: "#111" }}>
        
        <div className="text-center mb-4">
          <h2 className="text-white fw-bold">
            {isRegister 
              ? t("Hesab Yarat", "Create Account", "Создать аккаунт") 
              : t("Xoş Gəldiniz", "Welcome Back", "Добро пожаловать")}
          </h2>
          <p className="text-secondary small">
            {t("Zəhmət olmasa məlumatlarınızı daxil edin", "Please enter your details", "Пожалуйста, введите свои данные")}
          </p>
        </div>

        <form onSubmit={handleAuth}>
          <div className="mb-3">
            <label className="text-white-50 small mb-2">
              {t("E-mail", "Email", "Эл. почта")}
            </label>
            <input 
              type="email" 
              className="form-control bg-dark border-secondary text-white py-2 shadow-none" 
              placeholder={t("nümunə@mail.com", "example@mail.com", "пример@mail.com")}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="mb-4">
            <label className="text-white-50 small mb-2">
              {t("Şifrə", "Password", "Пароль")}
            </label>
            <input 
              type="password" 
              className="form-control bg-dark border-secondary text-white py-2 shadow-none" 
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button 
            type="submit" 
            className="btn w-100 py-2 fw-bold text-white mb-3" 
            style={{ backgroundColor: "#fd6500", border: "none" }}
            disabled={loading}
          >
            {loading 
              ? t("Gözləyin...", "Please wait...", "Подождите...") 
              : (isRegister ? t("QEYDİYYATDAN KEÇ", "SIGN UP", "РЕГИСТРАЦИЯ") : t("DAXİL OL", "LOG IN", "ВОЙТИ"))}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-secondary small">
            {isRegister 
              ? t("Artıq hesabınız var?", "Already have an account?", "Уже есть аккаунт?") 
              : t("Hesabınız yoxdur?", "Don't have an account?", "Нет аккаунта?")} 
            <span 
              className="text-warning ms-2 fw-bold" 
              style={{ cursor: "pointer", textDecoration: "underline" }} 
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister 
                ? t("Giriş edin", "Log in", "Войти") 
                : t("Qeydiyyatdan keçin", "Sign up", "Зарегистрироваться")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;