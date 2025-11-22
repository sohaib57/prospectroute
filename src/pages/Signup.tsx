import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, initAuthPersistence } from '../firebase'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Navbar } from '../components/Navbar'
import { useTranslation } from 'react-i18next'

type FormValues = { email: string; password: string }

const schema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
})

export default function Signup() {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ resolver: yupResolver(schema) })

	async function onSubmit(values: FormValues) {
		await initAuthPersistence()
		try {
			await createUserWithEmailAndPassword(auth, values.email, values.password)
			toast.success('Account created!')
			navigate('/users', { replace: true })
		} catch (e: any) {
			toast.error(e.message ?? 'Signup failed')
		}
	}

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<div className="mx-auto grid min-h-[70vh] w-full max-w-7xl place-items-center px-4 py-10 sm:px-6 lg:px-8">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-md space-y-3 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
				>
					<h1 className="mb-2 text-xl font-semibold">{t('common.signup')}</h1>
					<Input label={t('auth.email')} type="email" {...register('email')} error={errors.email?.message} />
					<Input
						label={t('auth.password')}
						type="password"
						{...register('password')}
						error={errors.password?.message}
					/>
					<Button type="submit" disabled={isSubmitting} className="w-full">
						{t('common.signup')}
					</Button>
					<p className="text-sm">
						{t('auth.haveAccount')}{' '}
						<Link className="text-pr-navy underline" to="/login">
							{t('common.login')}
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}


