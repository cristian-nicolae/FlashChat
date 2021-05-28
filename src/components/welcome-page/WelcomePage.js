import "./WelcomePage.scss";
import TextField from "@material-ui/core/TextField";
function WelcomePage() {
  return (
    <div className="wp-container">
      <div className="wp-title">Welcome to the chat</div>
      <div className="wp-form-cointainer">
        <div className="wp-form-label">Enter the secret key:</div>
        <div>
          <TextField
            required
            variant="outlined"
            id="wp-key-form"
            placeholder="SAFEPASSWORD..."
          />
        </div>
      </div>
      <button>Join now!</button>
    </div>
  );
}

export default WelcomePage;
