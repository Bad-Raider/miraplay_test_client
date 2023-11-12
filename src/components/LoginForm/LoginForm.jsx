import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const LoginForm = () => {
    return (
        <form
            style={{
                maxWidth: '500px',
                padding: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
            }}
            autoComplete="off"
        >
            <h2
                style={{
                    marginBottom: '40px',
                }}
            >
                Log in{' '}
            </h2>

            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                required
                sx={{
                    width: '100%',
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: '#3f9c14',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3f9c14',
                        },
                        fieldset: {
                            borderColor: '#181818',
                            boxShadow: '0 20px 40px rgba(63,156,20,.3)',

                        },
                    },
                }}
                InputLabelProps={{
                    style: { color: '#3f9c14' },
                }}
                InputProps={{
                    style: { color: 'white' },
                }}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                required
                sx={{
                    width: '100%',
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: '#3f9c14',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3f9c14',
                        },
                        fieldset: {
                            borderColor: '#181818',
                            boxShadow: '0 20px 40px rgba(63,156,20,.3)',

                        },
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: '#3f9c14',
                    },
                }}
                InputProps={{
                    style: { color: 'white' },
                }}
            />
            <Button
                style={{
                    backgroundColor: '#3f9c14',
                    boxShadow: '0 20px 40px rgba(63,156,20,.3)',
                }}
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                sx={{ width: '100%', mb: 3 }}
            >
                Login
            </Button>
        </form>
    );
};

export default LoginForm;