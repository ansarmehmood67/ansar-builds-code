import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				// Professional Colors
				brand: {
					blue: 'hsl(var(--brand-blue))',
					gold: 'hsl(var(--brand-gold))',
					slate: 'hsl(var(--brand-slate))',
					charcoal: 'hsl(var(--brand-charcoal))',
					steel: 'hsl(var(--brand-steel))',
				},
				
				// Glass Effects
				glass: {
					bg: 'var(--glass-bg)',
					border: 'var(--glass-border)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				elegant: 'var(--shadow-elegant)',
				brand: 'var(--shadow-brand)',
				gold: 'var(--shadow-gold)',
				soft: 'var(--shadow-soft)',
				medium: 'var(--shadow-medium)',
				strong: 'var(--shadow-strong)',
				glass: 'var(--glass-shadow)',
			},
			backgroundImage: {
				'hero-gradient': 'var(--hero-gradient)',
				'brand-gradient': 'var(--brand-gradient)',
				'text-gradient': 'var(--text-gradient)',
				'card-gradient': 'var(--card-gradient)',
				'subtle-gradient': 'var(--subtle-gradient)',
				'mesh-gradient': 'var(--mesh-gradient)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'spring': 'var(--transition-spring)',
				'bounce': 'var(--transition-bounce)',
				'elastic': 'var(--transition-elastic)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-40px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(40px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(270 60% 60% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(270 60% 60% / 0.6)' }
				},
				'mesh-shift': {
					'0%, 100%': { backgroundPosition: '0% 0%' },
					'25%': { backgroundPosition: '100% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'75%': { backgroundPosition: '0% 100%' }
				},
				'magnetic': {
					'0%': { transform: 'scale(1) translateY(0)' },
					'100%': { transform: 'scale(1.05) translateY(-2px)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%': { transform: 'translateX(-2px)' },
					'20%': { transform: 'translateX(2px)' },
					'30%': { transform: 'translateX(-1px)' },
					'40%': { transform: 'translateX(1px)' },
					'50%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'mesh-shift': 'mesh-shift 20s ease infinite',
				'magnetic': 'magnetic 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'glitch': 'glitch 0.5s ease-in-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
