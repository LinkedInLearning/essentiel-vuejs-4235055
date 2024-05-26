export default {
    props: {
        show: Boolean
    },
    template: `
    <transition name="modal">
        <div v-if="show" class="modal-mask">
        <div class="modal-container">
            <div class="modal-header">
            Commande envoyée
            </div>
            <div class="modal-footer">
                <p class="modal-default-button" @click="$emit('close')">OK</p>
            </div>
        </div>
        </div>
    </transition>
  `
}
