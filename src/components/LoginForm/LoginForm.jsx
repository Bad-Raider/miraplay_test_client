import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setCredential } from '../../redux/authSlice';
// import { useLoginMutation } from '../../redux/authApiSlice';
import { useLoginMutation } from '../../redux/authApi.js';

const LoginForm = () => {

    const {data, error, isLoading}= useLoginMutation()

    console.log('data', isLoading);
    // const navigate = useNavigate();

    // const [login, { isLoading }] = useLoginMutation();
    // const dispatch = useDispatch();

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const form = e.currentTarget;
    //     const email = form.elements.email.value.toLowerCase();
    //     const password = form.elements.password.value;

    //     try {
    //         const userData = await login({ email, password }).unwrap();
    //         dispatch(setCredential({ ...userData, email }));
    //         // navigate('/')
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        // isLoading ? <h1>Loading...</h1>:
        <form
            style={{
                maxWidth: '500px',
                padding: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
            }}
            autoComplete="off"
            // onSubmit={handleSubmit}
        >
            <h2
                style={{
                    marginBottom: '40px',
                }}
            >
                Вхід{' '}
            </h2>

            <TextField
                id="outlined-basic"
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
                id="outlined-basic"
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
