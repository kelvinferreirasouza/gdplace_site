import React from "react"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import logo from "../../Assets/img/logo_mini.png"

const WhatsAppFloatingBtn = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="+5548991750930"
            accountName="GDPlace - Comercial"
            allowEsc
            allowClickAway
            notification
            notificationSound
            statusMessage=""
            chatMessage="Olá, seja bem vindo! 🤝 Como podemos lhe ajudar?"
            messageDelay={1}
            placeholder="Digite uma mensagem.."
            avatar={logo}
            chatboxClassName="whatsappButton"
        />
    )
}

export default WhatsAppFloatingBtn