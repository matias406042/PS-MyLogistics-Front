// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-wrapper">
      <div class="container">
        <div class="row justify-content-center align-items-center min-vh-100">
          <div class="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
            <div class="card shadow-lg border-0">
              <!-- Header -->
              <div class="card-header bg-gradient text-white text-center py-4">
                <!-- Logo redondo -->
                <div class="logo-circle mx-auto mb-3">
                  <!-- Reemplaza con tu imagen: <img src="assets/logo.png" alt="Logo" class="logo-img rounded-circle" /> -->
                  <img src="logo.png" alt="Logo" class="logo-img rounded-circle" />
                </div>
                <h2 class="mb-1 fw-bold">My Logistic</h2>
                <p class="mb-0 text-white-50">Ingresa a tu cuenta</p>
              </div>

              <!-- Body -->
              <div class="card-body p-4">
                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label fw-semibold">Correo Electrónico</label>
                  <div class="input-group">
                    <span class="input-group-text bg-white">
                      <svg class="icon-input" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      [(ngModel)]="email"
                      placeholder="usuario@empresa.com"
                      required
                    />
                  </div>
                </div>

                <!-- Contraseña -->
                <div class="mb-3">
                  <label for="password" class="form-label fw-semibold">Contraseña</label>
                  <div class="input-group">
                    <span class="input-group-text bg-white">
                      <svg class="icon-input" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </span>
                    <input
                      [type]="showPassword ? 'text' : 'password'"
                      class="form-control"
                      id="password"
                      [(ngModel)]="password"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      (click)="togglePassword()"
                    >
                      <svg *ngIf="!showPassword" class="icon-input" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      <svg *ngIf="showPassword" class="icon-input" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Recordarme y Olvidé contraseña -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      [(ngModel)]="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      Recordarme
                    </label>
                  </div>
                  <button 
                    type="button"
                    class="btn btn-link p-0 text-decoration-none"
                    (click)="forgotPassword()"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <!-- Botón de login -->
                <button
                  type="button"
                  class="btn btn-primary btn-lg w-100 mb-3 btn-gradient"
                  (click)="onSubmit()"
                >
                  Iniciar Sesión
                </button>

                <!-- Registro -->
                <div class="text-center">
                  <span class="text-muted">¿No tienes cuenta? </span>
                  <button 
                    type="button"
                    class="btn btn-link p-0 text-decoration-none"
                    (click)="goToRegister()"
                  >
                    Regístrate aquí
                  </button>
                </div>
              </div>

              <!-- Footer -->
              <div class="card-footer text-center bg-light text-muted py-3">
                <small>© 2025 My Logistics. Todos los derechos reservados.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-wrapper {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .login-wrapper::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: moveBackground 20s linear infinite;
    }

    @keyframes moveBackground {
      0% { transform: translate(0, 0); }
      100% { transform: translate(50px, 50px); }
    }

    .card {
      border-radius: 1rem;
      overflow: hidden;
    }

    .bg-gradient {
      background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
      border: none;
    }

    .logo-circle {
      width: 280px;
      height: 280px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .logo-icon {
      width: 140px;
      height: 140px;
      color: #2563eb;
    }

    .logo-img {
      width: 260px;
      height: 260px;
      object-fit: cover;
      padding: 10px;
    }

    .icon-input {
      width: 20px;
      height: 20px;
      color: #6c757d;
    }

    .input-group-text {
      border-right: none;
    }

    .input-group .form-control {
      border-left: none;
    }

    .input-group .form-control:focus {
      border-color: #ced4da;
      box-shadow: none;
    }

    .input-group:focus-within .input-group-text {
      border-color: #86b7fe;
    }

    .input-group:focus-within .form-control {
      border-color: #86b7fe;
    }

    .btn-gradient {
      background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
      border: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-gradient:hover {
      background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    .btn-gradient:active {
      transform: translateY(0);
    }

    .btn-link {
      color: #2563eb;
      font-weight: 600;
    }

    .btn-link:hover {
      color: #1d4ed8;
    }

    .card-footer {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }

    .form-check-input:checked {
      background-color: #2563eb;
      border-color: #2563eb;
    }

    .shadow-lg {
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    }

    @media (max-width: 576px) {
      .card-body {
        padding: 1.5rem !important;
      }

      .logo-circle {
        width: 180px;
        height: 180px;
      }

      .logo-icon {
        width: 140px;
        height: 140px;
      }

      .logo-img {
        width: 170px;
        height: 170px;
      }
    }
  `]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    console.log('Login attempt:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
    
    alert('Funcionalidad de login - Conectar con tu backend/servicio de autenticación');
  }

  forgotPassword(): void {
    console.log('Forgot password clicked');
  }

  goToRegister(): void {
    console.log('Register clicked');
  }
}


/* 
INSTRUCCIONES DE USO CON BOOTSTRAP:

1. IMPORTANTE: Debes tener Bootstrap instalado en tu proyecto Angular.
   Si no lo tienes, instálalo con:
   npm install bootstrap

2. Agrega Bootstrap en tu angular.json:
   "styles": [
     "node_modules/bootstrap/dist/css/bootstrap.min.css",
     "src/styles.css"
   ]

3. Para agregar tu logo REDONDO:
   Reemplaza las líneas 17-22 con:
   <img src="assets/logo.png" alt="Logo" class="logo-img rounded-circle" />

   NOTA: La clase "rounded-circle" de Bootstrap hace la imagen redonda

4. La imagen se verá redonda automáticamente gracias a:
   - .logo-circle (contenedor circular)
   - .logo-img con rounded-circle de Bootstrap
   - object-fit: cover (para que la imagen no se deforme)

5. Para usar el componente:
   - Copia este código en: src/app/login/login.component.ts
   - Importa en tu routing
   - ¡Listo!
*/