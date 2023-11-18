import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
import { setUser } from '../../redux/userSlice.js';
import { messageForSwal } from '../../helpers/messageForSwal.js'; 
import { useLoginMutation } from '../../redux/authApi.js';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [dispatchLogin] = useLoginMutation();

    const iconForSwal = { error: 'error', success: 'success' };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        dispatchLogin({
            email,
            password,
        })
            .unwrap()
            .then(res => {
                dispatch(
                    setUser({
                        token: res.token,
                        email,
                    })
                );
                successOrError(iconForSwal.success, messageForSwal[200]);
                navigate('/');
            })
            .catch(e => {
                if (e.originalStatus === 409) {
                    return successOrError(
                        iconForSwal.error,
                        messageForSwal[409]
                    );
                }
                successOrError(iconForSwal.error, messageForSwal[400]);
            });
        form.reset();
    };

    const successOrError = (icon, message) => {
        Swal.fire({
            position: 'center',
            icon: `${icon}`,
            text: `${message}`,
            showConfirmButton: false,
            timer: 1200,
        });
    };

    return (
        <form
            style={{
                maxWidth: '500px',
                padding: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h2
                style={{
                    marginBottom: '40px',
                }}
            >
                Вхід{' '}
            </h2>

            <TextField
                id="email"
                label="ВВЕДІТЬ СВІЙ EMAIL"
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
                id="password"
                label="ВАШ ПАРОЛЬ"
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
