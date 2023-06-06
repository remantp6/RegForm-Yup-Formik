import { object, string, ref, boolean } from 'yup';

export default object({
    name: string().required('*Name must be required'),
    gender: string().oneOf(['male', 'female'], null).required('*Please select a gender'),
    email: string().email().required('*Email must be required'),
    password: string().min(6, 'password must be at least 6 characters long').required('* Password must be required'),
    confirm_password: string().required().oneOf([ref('password'), null], '*Password must match'),
    check_box: boolean().oneOf([true], '*You must accept the terms and conditions'),
  });