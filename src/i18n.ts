import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
	en: {
		translation: {
			common: {
				appName: 'ProspectRoute',
				login: 'Login',
				signup: 'Sign up',
				logout: 'Logout',
				users: 'Users',
				tasks: 'My Tasks Dashboard',
				getStarted: 'Get started',
				loading: 'Loading...',
				search: 'Search',
				sort: 'Sort',
				az: 'A–Z',
				za: 'Z–A',
				newest: 'Newest',
				oldest: 'Oldest',
				language: 'Language',
				english: 'English',
				arabic: 'Arabic',
				pricing: 'Pricing',
				home: 'Home',
			},
			landing: {
				headline: 'High volume, pristine, exclusive leads.',
				subhead:
					'Up to 50 web leads per day, exclusive and high quality.',
				cta: 'See pricing',
			},
			auth: {
				email: 'Email',
				password: 'Password',
				firstName: 'First name',
				lastName: 'Last name',
				haveAccount: 'Already have an account?',
				noAccount: "Don't have an account?",
			},
			users: {
				title: 'Users Dashboard',
				name: 'Name',
				email: 'Email',
				view: 'View',
				details: 'User Details',
				back: 'Back',
			},
			tasks: {
				title: 'My Tasks Dashboard',
				add: 'Add Task',
				edit: 'Edit Task',
				delete: 'Delete',
				confirmDelete: 'Are you sure you want to delete this task?',
				titleLabel: 'Title',
				descLabel: 'Description',
				status: 'Status',
				pending: 'Pending',
				completed: 'Completed',
				save: 'Save',
				cancel: 'Cancel',
				noTasks: 'No tasks yet',
			},
		},
	},
	ar: {
		translation: {
			common: {
				appName: 'بروسبيكت روت',
				login: 'تسجيل الدخول',
				signup: 'إنشاء حساب',
				logout: 'تسجيل الخروج',
				users: 'المستخدمون',
				tasks: 'مهامي',
				getStarted: 'ابدأ الآن',
				loading: 'جارٍ التحميل...',
				search: 'بحث',
				sort: 'ترتيب',
				az: 'أ-ي',
				za: 'ي-أ',
				newest: 'الأحدث',
				oldest: 'الأقدم',
				language: 'اللغة',
				english: 'الإنجليزية',
				arabic: 'العربية',
				pricing: 'الأسعار',
				home: 'الرئيسية',
			},
			landing: {
				headline: 'عملاء محتملون حصريون بكميات كبيرة وجودة عالية.',
				subhead: 'حتى 50 عميلاً يوميًا، حصريون وعالي الجودة.',
				cta: 'عرض الأسعار',
			},
			auth: {
				email: 'البريد الإلكتروني',
				password: 'كلمة المرور',
				firstName: 'الاسم الأول',
				lastName: 'اسم العائلة',
				haveAccount: 'لديك حساب؟',
				noAccount: 'ليس لديك حساب؟',
			},
			users: {
				title: 'لوحة المستخدمين',
				name: 'الاسم',
				email: 'البريد الإلكتروني',
				view: 'عرض',
				details: 'تفاصيل المستخدم',
				back: 'رجوع',
			},
			tasks: {
				title: 'مهامي',
				add: 'إضافة مهمة',
				edit: 'تعديل المهمة',
				delete: 'حذف',
				confirmDelete: 'هل أنت متأكد أنك تريد حذف هذه المهمة؟',
				titleLabel: 'العنوان',
				descLabel: 'الوصف',
				status: 'الحالة',
				pending: 'قيد الانتظار',
				completed: 'مكتملة',
				save: 'حفظ',
				cancel: 'إلغاء',
				noTasks: 'لا توجد مهام بعد',
			},
		},
	},
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		supportedLngs: ['en', 'ar'],
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
			lookupQuerystring: 'lng',
		},
	})

// Set document direction on language changes
i18n.on('languageChanged', (lng) => {
	const isRtl = lng === 'ar'
	document.documentElement.lang = lng
	document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
})

export default i18n


