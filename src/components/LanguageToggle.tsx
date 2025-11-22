import { useTranslation } from 'react-i18next'
import { Button } from './Button'

export function LanguageToggle() {
	const { i18n } = useTranslation()
	const isAr = i18n.language === 'ar'
	return (
		<Button
			variant="secondary"
			size="sm"
			onClick={() => i18n.changeLanguage(isAr ? 'en' : 'ar')}
			title={isAr ? 'Switch to English' : 'التبديل للعربية'}
		>
			{isAr ? 'EN' : 'AR'}
		</Button>
	)
}


