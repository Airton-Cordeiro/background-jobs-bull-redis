import Mail from '../lib/Mail'


export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }){
        const { user } = data;
        
         Mail.sendMail({
            from: 'TIM <tim@tim.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Pagamento de Fatura',
            html: `Olá ${user.name}, a sua fatura não será mais cobrada!`
        })
    }
}

/*

*/