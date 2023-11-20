import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
import { useRegisterMutation } from '../../redux/authApi';
import { messageForSwal } from '../../helpers/messageForSwal';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [dispatchRegister, { isLoading }] = useRegisterMutation();

    const iconForSwal = { error: 'error', success: 'success' };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        dispatchRegister({
            name,
            email,
            password,
        })
            .unwrap()
            .then(res => {
                successOrError(iconForSwal.success, messageForSwal[201]);
                navigate('/');
            })
            .catch(e => {
                console.log('e.originalStatus', e.originalStatus);
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
        <>
            {isLoading && (
                <Stack sx={{ width: '100%', color: 'green.500' }} spacing={2}>
                    <LinearProgress color="success" />
                </Stack>
            )}

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
                    Реєстрація{' '}
                </h2>
                <TextField
                    id="name"
                    label="ВАШЕ ІМ'Я"
                    variant="outlined"
                    type="text"
                    name="name"
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
                    id="email"
                    label="ВВЕДІТЬ ВАШ EMAIL "
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
                    pattern="^(?=.*[A-Z])[a-zA-Z0-9]{6,30}$"
                    title="Пароль повинен містити від 6 до 30 символів, включаючи принаймні одну велику літеру та цифри."
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
        </>
    );
};

export default RegisterForm;
