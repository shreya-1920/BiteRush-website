import { useState } from "react";
import { resetPassword } from "../../services/AuthServices";

function ResetPasswordModal({ setShowReset }) {
  const [newPassword, setNewPassword] =
    useState("");

  const handleResetPassword = async () => {
    try {
      const response =
        await resetPassword({
          newPassword,
        });

      alert(response.data.message);

      setShowReset(false);
    } catch (error) {
      alert("Reset Failed");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowReset(false)}
      >
        X
      </button>

      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) =>
          setNewPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
}

export default ResetPasswordModal;