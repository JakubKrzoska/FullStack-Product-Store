import { PaletteIcon } from 'lucide-react'
import {THEMES} from "../constants/index"
import { useThemeStore } from '../store/useThemeStore'

function ThemeSelector() {
    const {theme, setTheme} = useThemeStore()
    console.log(theme)

  return (
    <div className='dropdown dropdown-end'>
        <button tabIndex={0} className='btn btn-ghost btn-circle'>
            <PaletteIcon className='size-5'/>
        </button>

        <div tabIndex={0} className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10'>
        {THEMES.map(themeObject => (
            <button key={themeObject.name}  onClick={() => setTheme(themeObject.name)} className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${theme === themeObject.name ? "bg-primary/10 text-primary" : "hover:bg-base-content/5"}`}>
                <PaletteIcon className='size-4'/>
                
                <span className='text-sm font-medium'>{themeObject.label}</span>

                {/* Theme colors */}
                <div className='ml-auto flex gap-1'>
                    {themeObject.colors.map((color, i) => (
                        <span key={i} className='size-2 rounded-full' style={{backgroundColor: color}} />
                    ))}
                </div>
            </button>
        ))}
        </div>
    </div>
  )
}

export default ThemeSelector