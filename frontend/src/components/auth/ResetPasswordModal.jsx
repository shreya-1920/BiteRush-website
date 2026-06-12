import { useState } from "react";
import { resetPassword } from "../../services/AuthServices";
import "../../assets/styles/ResetPasswordModal.css";

function ResetPasswordModal({ setShowReset }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const handleResetPassword = async () => {
    try {
      const response =
        await resetPassword({
          email,
          newPassword,
        });

      alert(response.data.message);

      setShowReset(false);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Reset Failed"
      );
    }
  };

  return (
    <div className="modal-overlay">
      <div className="reset-modal">

        <button
          className="close-btn"
          onClick={() => setShowReset(false)}
        >
          ✕
        </button>

        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
        />

        <button
          className="reset-btn"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>

      </div>
    </div>
  );
}

export default ResetPasswordModal;