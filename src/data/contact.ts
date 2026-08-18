export interface Contactlink {
    value:string
    href:string
    icon:string
    label:string

}

export const contactLinks: Contactlink[] = [
    {
        
        label : 'Email',
        value : 'maheshrathor007@gmail.com',
        href : 'mailto:maheshrathor007@gmail.com',
        icon : '✉'
    },
    {
        label : 'LinkedIn',
        value : 'https://www.linkedin.com/in/mahesh-rathore007/',
        href:'https://www.linkedin.com/in/mahesh-rathore007/',
        icon:'in'
    },
     {
        label : 'GitHub',
        value : 'gitmahesh32',
        href  : 'https://github.com/gitmahesh32',
        icon  : 'in'
    }
]