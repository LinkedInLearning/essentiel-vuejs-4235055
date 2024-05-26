import FooterChild from './FooterChild.js'

export default {
    components: {
        FooterChild
    },
    template:
        `<div>
            <h2>Une question ? Vous souhaitez nous contacter</h2>
            <input type="email" placeholder="Entrez votre adresse mail" /><br>
            <input type="text" placeholder="Ecrivez votre message" /><br>
            <input type="button" value="Envoyer" /><br>
            <footer-child><footer-child>
        </div>`
}