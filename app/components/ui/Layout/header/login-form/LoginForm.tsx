import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useOutside } from '@/hooks/useOutside'
import { useAuth } from '@/hooks/useAuth'
import { IAuthFields } from '@/ui/Layout/header/login-form/login-form.interface'
import { FaRegUserCircle } from 'react-icons/fa'
import Field from '@/ui/Field/Field'
import Button from '@/ui/Button/Button'
import { validEmail } from '@/ui/Layout/header/login-form/login-auth.constants'
import UserAvatar from '@/ui/UserAvatar/UserAvatar'
import styles from './LoginForm.module.scss'
import { motion } from 'framer-motion'
import { menuAnimation } from '@/utils/animation/fade'

const LoginForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit, reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { user, setUser } = useAuth()

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') setUser({
			id: 1,
			name: 'Aln Dev',
			email: 'aln@gmail.com',
			avatarPath: '/avatar.png'
		})
		// else if (type === 'register')

		reset()
		setIsShow(false)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar link='/dashboard' title='Перейти в dashboard' avatarPath={user.avatarPath || ''} />
			) : (
				<button className={styles.button} onClick={() => setIsShow(!isShow)}>
					<FaRegUserCircle />
				</button>
			)}
			<motion.div animate={isShow ? 'open' : 'closed'} variants={menuAnimation}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should be 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type={'password'}
					/>
					<div className='mt-5 mb-1 text-center'>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>Register
					</button>
				</form>
			</motion.div>
		</div>
	)
}

export default LoginForm
