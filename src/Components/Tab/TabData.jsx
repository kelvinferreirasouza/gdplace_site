import { Fragment } from "react"
import CarouselDistribuidores from "../Marcas/CarouselDistribuidores"
import CarouselInversores from "../Marcas/CarouselInversores"
import CarouselModulos from "../Marcas/CarouselModulos"
import DataPorqueEscolher from "./DataPorqueEscolher"

const TabData01 = [
    {
        tabTitle: 'PLANNING',
        subtitle: 'MODERNIZED REDESIGN',
        tabicons: "",
        title: 'Business planning',
        img: 'https://via.placeholder.com/800x625',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonTitle: "Discover Litho",
        buttonLink: "/"
    },
    {
        tabTitle: 'RESEARCH',
        subtitle: 'INNOVATIVE SOLUTIONS',
        tabicons: "",
        title: 'Business research',
        img: 'https://via.placeholder.com/800x625',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonTitle: "Discover Litho",
        buttonLink: "/"
    },
    {
        tabTitle: 'TARGET',
        subtitle: 'MODERNIZED REDESIGN',
        tabicons: "",
        title: 'Business target',
        img: 'https://via.placeholder.com/800x625',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna ut enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonTitle: "Discover Litho",
        buttonLink: "/"
    }
]

const TabContentPorqueEscolher01 = () => {
    return (
        <Fragment>
            <p className="mb-3">
                Tecnologia é a nossa essência! As soluções Sienge sempre estiveram na vanguarda tecnológica, 
                desde o desenvolvimento de um software especialista em 1990, até o uso da Computação Cognitiva, já presente no nosso dia a dia,
                entregando valor para nossos clientes.
            </p>

            <p className="mb-3">
                O uso da cognição tem como objetivo utilizar máquinas para executarem tarefas
                humanas de forma autônoma e inteligente para facilitar ainda mais a rotina de 
                trabalho de uma empresa da construção.
            </p>

            <p>
                Tanta revolução foi reconhecida mundialmente como solução excepcional pela maior 
                empresa de TI do mundo: a IBM. No IBM Beacon Awards 2019.
            </p>
        </Fragment>
    )
}

const TabContentPorqueEscolher02 = () => {
    return (
        <Fragment>
            <p className="mb-3">
                Tecnologia é a nossa essência! As soluções Sienge sempre estiveram na vanguarda tecnológica, 
                desde o desenvolvimento de um software especialista em 1990, até o uso da Computação Cognitiva, já presente no nosso dia a dia,
                entregando valor para nossos clientes.
            </p>

            <p className="mb-3">
                O uso da cognição tem como objetivo utilizar máquinas para executarem tarefas
                humanas de forma autônoma e inteligente para facilitar ainda mais a rotina de 
                trabalho de uma empresa da construção.
            </p>

            <p>
                Tanta revolução foi reconhecida mundialmente como solução excepcional pela maior 
                empresa de TI do mundo: a IBM. No IBM Beacon Awards 2019.
            </p>
        </Fragment>
    )
}

const TabContentPorqueEscolher03 = () => {
    return (
        <Fragment>
            <p className="mb-3">
                Tecnologia é a nossa essência! As soluções Sienge sempre estiveram na vanguarda tecnológica, 
                desde o desenvolvimento de um software especialista em 1990, até o uso da Computação Cognitiva, já presente no nosso dia a dia,
                entregando valor para nossos clientes.
            </p>

            <p className="mb-3">
                O uso da cognição tem como objetivo utilizar máquinas para executarem tarefas
                humanas de forma autônoma e inteligente para facilitar ainda mais a rotina de 
                trabalho de uma empresa da construção.
            </p>

            <p>
                Tanta revolução foi reconhecida mundialmente como solução excepcional pela maior 
                empresa de TI do mundo: a IBM. No IBM Beacon Awards 2019.
            </p>
        </Fragment>
    )
}

const TabContentPorqueEscolher04 = () => {
    return (
        <Fragment>
            <p className="mb-3">
                Tecnologia é a nossa essência! As soluções Sienge sempre estiveram na vanguarda tecnológica, 
                desde o desenvolvimento de um software especialista em 1990, até o uso da Computação Cognitiva, já presente no nosso dia a dia,
                entregando valor para nossos clientes.
            </p>

            <p className="mb-3">
                O uso da cognição tem como objetivo utilizar máquinas para executarem tarefas
                humanas de forma autônoma e inteligente para facilitar ainda mais a rotina de 
                trabalho de uma empresa da construção.
            </p>

            <p>
                Tanta revolução foi reconhecida mundialmente como solução excepcional pela maior 
                empresa de TI do mundo: a IBM. No IBM Beacon Awards 2019.
            </p>
        </Fragment>
    )
}

const TabContentPorqueEscolher05 = () => {
    return (
        <Fragment>
            <p className="mb-3">
                Tecnologia é a nossa essência! As soluções Sienge sempre estiveram na vanguarda tecnológica, 
                desde o desenvolvimento de um software especialista em 1990, até o uso da Computação Cognitiva, já presente no nosso dia a dia,
                entregando valor para nossos clientes.
            </p>

            <p className="mb-3">
                O uso da cognição tem como objetivo utilizar máquinas para executarem tarefas
                humanas de forma autônoma e inteligente para facilitar ainda mais a rotina de 
                trabalho de uma empresa da construção.
            </p>

            <p>
                Tanta revolução foi reconhecida mundialmente como solução excepcional pela maior 
                empresa de TI do mundo: a IBM. No IBM Beacon Awards 2019.
            </p>
        </Fragment>
    )
}

const TabDataPorqueEscolher = [
    {
        tabNumber: '01',
        tabTitle: 'Tecnologia Premiada',
        title: 'We offer a full range of digital marketing services',
        content: 
            <DataPorqueEscolher 
                title="Tecnologia Premiada 1"
                content={TabContentPorqueEscolher01()} 
                imgVideo="/assets/img/webp/home-travel-agency-about.webp" 
                buttonTitle="Saiba mais"
                buttonLink="#"
            />            
    },
    {
        tabNumber: '02',
        tabTitle: 'Especialista na Construção',
        title: 'We are expert in search engine and social media',
        content: 
            <DataPorqueEscolher 
                title="Tecnologia Premiada 2"
                content={TabContentPorqueEscolher02()} 
                imgVideo="/assets/img/webp/home-travel-agency-about.webp" 
                buttonTitle="Saiba mais"
                buttonLink="#"
            />
    },
    {
        tabNumber: '03',
        tabTitle: 'Melhor Atendimento',
        title: 'We created digital ideas that are bigger and bolder',
        content: 
            <DataPorqueEscolher 
                title="Tecnologia Premiada 3"
                content={TabContentPorqueEscolher03()} 
                imgVideo="/assets/img/webp/home-travel-agency-about.webp" 
                buttonTitle="Saiba mais"
                buttonLink="#"
            />
    },
    {
        tabNumber: '04',
        tabTitle: 'Integração do ecossistema',
        title: 'Litho is meant to simplify the website building',
        content: 
            <DataPorqueEscolher 
                title="Tecnologia Premiada 4"
                content={TabContentPorqueEscolher04()} 
                imgVideo="/assets/img/webp/home-travel-agency-about.webp" 
                buttonTitle="Saiba mais"
                buttonLink="#"
            />
    },
    {
        tabNumber: '05',
        tabTitle: 'Referência na construção',
        title: 'Litho is meant to simplify the website building',
        content: 
            <DataPorqueEscolher 
                title="Tecnologia Premiada 5"
                content={TabContentPorqueEscolher05()} 
                imgVideo="/assets/img/webp/home-travel-agency-about.webp" 
                buttonTitle="Saiba Mais"
                buttonLink="#"
            />
    }
]

const TabDataMarcas = [
    {
        tabTitle: 'DISTRIBUIDORES',
        subtitle: 'OS MELHORES DISTRIBUIDORES',
        tabicons: "",
        title: 'Nossos Distribuidores',
        carousel: <CarouselDistribuidores />,
        content: 'Nosso sistema conecta você aos principais fornecedores de equipamentos e produtos solares. Nossa listagem reúne uma variedade de distribuidores confiáveis e experientes, prontos para atender às suas necessidades específicas de energia solar.',
    },
    {
        tabTitle: 'INVERSORES',
        subtitle: 'MARCAS LÍDERES DE VENDAS',
        tabicons: "",
        title: 'Marcas de Inversores',
        content: 'Nosso catalogo de marcas de inversores solares oferece opções diversificadas para atender às suas necessidades específicas. Explore nossa seleção para encontrar marcas confiáveis e eficientes que ajudarão a maximizar o potencial da sua instalação solar.',
        carousel: <CarouselInversores />,
        buttonTitle: "VER CATÁLOGO",
        buttonLink: "/"
    },
    {
        tabTitle: 'MÓDULOS',
        subtitle: 'MARCAS LÍDERES DE VENDAS',
        tabicons: "",
        title: 'Marcas de Módulos',
        carousel: <CarouselModulos />,
        content: 'Nossa listagem abrange desde módulos de inversores solares de alta potência e eficiência até opções mais acessíveis, adequadas para diferentes necessidades e orçamentos. Destacamos marcas que oferecem recursos avançados, como otimizadores de potência individual, monitoramento em tempo real e conectividade inteligente.',
        buttonTitle: "VER CATÁLOGO",
        buttonLink: "/"
    }
]

const TabData02 = [
    {
        tabTitle: 'Development',
        tabicons: "ti-light-bulb",
        subtitle: 'Transform your ideas. We know that good design means good business.',
        img: 'https://via.placeholder.com/800x550',
        title: 'We are idea driven, working with a strong focus on design and user experience.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.',
        buttonTitle: "watch a projects",
        buttonLink: "#"
    },
    {
        tabTitle: 'Performance',
        tabicons: "ti-timer",
        img: 'https://via.placeholder.com/800x550',
        title: 'We are idea driven, working with a strong focus on design and user experience.',
        subtitle: 'Transform your ideas. We know that good design means good business.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.',
        buttonTitle: "watch a projects",
        buttonLink: "#"
    },
    {
        tabTitle: 'Analytics',
        tabicons: "ti-pie-chart",
        img: 'https://via.placeholder.com/800x550',
        title: 'We are idea driven, working with a strong focus on design and user experience.',
        subtitle: 'Transform your ideas. We know that good design means good business.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.',
        buttonTitle: "watch a projects",
        buttonLink: "#"
    },
    {
        tabTitle: 'Concept',
        tabicons: "ti-crown",
        img: 'https://via.placeholder.com/800x550',
        title: 'We are idea driven, working with a strong focus on design and user experience.',
        subtitle: 'Transform your ideas. We know that good design means good business.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.',
        buttonTitle: "watch a projects",
        buttonLink: "#"
    },
]

const TabData03 = [
    {
        tabTitle: 'STARTERS',
        tabicons: "",
        activities: [
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Green salad',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Grilled chicken tenders',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Crepes of wrath',
                content: 'Printing and typesetting industry',
                author: '',
                badge: {
                    title: "new",
                    color: "#70a967",
                }
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Chicken breast burger',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser blatter',
                content: 'Ipsum is simply dolor text printing',
                author: 'Printing and typesetting industry',

            }, {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives ',
                content: 'Ipsum is simply dolor text printing',
                author: '',
                badge: {
                    title: "hot",
                    color: "#d74a3a"
                }
            },
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Printing and typesetting industry',
                author: ''
            },
            {
                price: '$07.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser platter',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
        ]
    },
    {
        tabTitle: 'NONVEG',
        tabicons: "",
        activities: [
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser blatter',
                content: 'Lorem ipsum has been the industry',
                author: '',
            },
            {
                price: '$02.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Chicken breast burger',
                content: 'Printing and typesetting industry',
                author: ''
            },
            {
                price: '$04.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Green salad',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$07.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Grilled chicken tenders',
                content: 'Lorem ipsum has been the industry',
                author: ''
            },
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Crepes of wrath ',
                content: 'Printing and typesetting industry',
                author: '',
                badge: {
                    title: "new",
                    color: "#70a967",
                }
            },
            {
                price: '$09.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Ipsum is simply dolor text printing',
                author: '',
                badge: {
                    title: "hot",
                    color: "#d74a3a"
                }
            },
            {
                price: '$02.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Lorem ipsum has been the industry',
                author: ''
            },
            {
                price: '$03.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser platter',
                content: 'Printing and typesetting industry',
                author: ''
            },
        ]
    }, {
        tabTitle: 'VEGETARIAN',
        tabicons: "",
        activities: [
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Green salad',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Grilled chicken tenders',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Crepes of wrath',
                content: 'Printing and typesetting industry',
                author: '',
                badge: {
                    title: "new",
                    color: "#70a967"
                }
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Chicken breast burger',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser blatter',
                content: 'Ipsum is simply dolor text printing',
                author: 'Printing and typesetting industry'
            }, {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives ',
                content: 'Ipsum is simply dolor text printing',
                author: '',
                badge: {
                    title: "hot",
                    color: "#d74a3a"
                }
            },
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Printing and typesetting industry',
                author: ''
            },
            {
                price: '$07.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser platter',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
        ]
    }, {
        tabTitle: 'DESSERT',
        tabicons: "",
        activities: [
            {
                price: '$02.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser blatter',
                content: 'Lorem ipsum has been the industry',
                author: ''
            },
            {
                price: '$04.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Chicken breast burger',
                content: 'Printing and typesetting industry',
                author: ''
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Green salad',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Grilled chicken tenders',
                content: 'Lorem ipsum has been the industry',
                author: ''
            },
            {
                price: '$03.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Crepes of wrath ',
                content: 'Printing and typesetting industry',
                author: '',
                badge: {
                    title: "new",
                    color: "#70a967"
                }
            },
            {
                price: '$05.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Ipsum is simply dolor text printing',
                author: '',
                badge: {
                    title: "hot",
                    color: "#d74a3a"
                }
            },
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Lorem ipsum has been the industry',
                author: ''
            },
            {
                price: '$03.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser platter',
                content: 'Printing and typesetting industry',
                author: ''
            },
        ]
    }, {
        tabTitle: 'DRINKS',
        tabicons: "",
        activities: [
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Green salad',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Grilled chicken tenders',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Crepes of wrath',
                content: 'Printing and typesetting industry',
                author: '',
                badge: {
                    title: "new",
                    color: "#70a967"
                }
            },
            {
                price: '$06.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Chicken breast burger',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
            {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser blatter',
                content: 'Ipsum is simply dolor text printing',
                author: 'Printing and typesetting industry'
            }, {
                price: '$08.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives ',
                content: 'Ipsum is simply dolor text printing',
                author: '',
                badge: {
                    title: "hot",
                    color: "#d74a3a"
                }
            },
            {
                price: '$10.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Spicy mixed olives',
                content: 'Printing and typesetting industry',
                author: ''
            },
            {
                price: '$07.00',
                img: 'https://via.placeholder.com/73x73',
                title: 'Appeteaser platter',
                content: 'Ipsum is simply dolor text printing',
                author: ''
            },
        ]
    },
]

const TabData05 = [
    {
        tabTitle: 'MONDAY',
        tabicons: "",
        activities: [
            {
                accordionid:"accordion-style-5-1",
                accordionhref:"#accordion-style-5-1",
                time:"06:00 - 07:00",
                title: 'Yoga and pilates',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-2",
                accordionhref:"#accordion-style-5-2",
                time:"08:00 - 09:00",
                title: 'Energy blast',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson'
            },
            {
                 accordionid:"accordion-style-5-3",
                accordionhref:"#accordion-style-5-3",
                time:"10:00 - 11:00",
                title: 'Cardio workout',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Jeremy dupont',

            },
            {
                  accordionid:"accordion-style-5-4",
                accordionhref:"#accordion-style-5-4",
                time:"11:00 - 12:00",
                title: 'Athletics classes',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-5",
                accordionhref:"#accordion-style-5-5",
                time:"13:00 - 15:00",
                title: 'Boxercise',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Bryan jonhson',

            }
        ]
    },
    {
        tabTitle: 'TUESDAY',
        tabicons: "",
        activities: [
            {
                accordionid:"accordion-style-5-1",
                accordionhref:"#accordion-style-5-1",
                time:"06:00 - 07:00",
                title: 'Energy blast',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-2",
                accordionhref:"#accordion-style-5-2",
                time:"08:00 - 09:00",
                title: 'Yoga and pilates',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson'
            },
            {
                 accordionid:"accordion-style-5-3",
                accordionhref:"#accordion-style-5-3",
                time:"10:00 - 11:00",
                title: 'Cardio workout',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Jeremy dupont'
            },
            {
                  accordionid:"accordion-style-5-4",
                accordionhref:"#accordion-style-5-4",
                time:"12:00 - 13:00",
                title: 'Boxercise',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-5",
                accordionhref:"#accordion-style-5-5",
                time:"13:00 - 14:00",
                title: 'Athletics classes',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson',

            },

        ]
    },
    {
        tabTitle: 'WEDNESDAY',
        tabicons: "",
        activities: [
            {
                accordionid:"accordion-style-5-1",
                accordionhref:"#accordion-style-5-1",
                time:"06:00 - 07:00",
                title: 'Yoga and pilates',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-2",
                accordionhref:"#accordion-style-5-2",
                time:"08:00 - 09:00",
                title: 'Energy blast',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson'
            },
            {
                 accordionid:"accordion-style-5-3",
                accordionhref:"#accordion-style-5-3",
                time:"10:00 - 11:00",
                title: 'Cardio workout',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Jeremy dupont',

            },
            {
                  accordionid:"accordion-style-5-4",
                accordionhref:"#accordion-style-5-4",
                time:"11:00 - 12:00",
                title: 'Athletics classes',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-5",
                accordionhref:"#accordion-style-5-5",
                time:"13:00 - 15:00",
                title: 'Boxercise',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Bryan jonhson',

            }
        ]
    },
    {
        tabTitle: 'THURSDAY',
        tabicons: "",
        activities: [
            {
                accordionid:"accordion-style-5-1",
                accordionhref:"#accordion-style-5-1",
                time:"06:00 - 07:00",
                title: 'Energy blast',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-2",
                accordionhref:"#accordion-style-5-2",
                time:"08:00 - 09:00",
                title: 'Yoga and pilates',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson'
            },
            {
                 accordionid:"accordion-style-5-3",
                accordionhref:"#accordion-style-5-3",
                time:"10:00 - 11:00",
                title: 'Cardio workout',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Jeremy dupont'
            },
            {
                  accordionid:"accordion-style-5-4",
                accordionhref:"#accordion-style-5-4",
                time:"12:00 - 13:00",
                title: 'Boxercise',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                 accordionid:"accordion-style-5-5",
                accordionhref:"#accordion-style-5-5",
                time:"13:00 - 14:00",
                title: 'Athletics classes',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson',

            },

        ]
    },
    {
        tabTitle: 'FRIDAY',
        tabicons: "",
        activities: [
            {
                accordionid:"accordion-style-5-1",
                accordionhref:"#accordion-style-5-1",
                time:"06:00 - 07:00",
                title: 'Yoga and pilates',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                accordionid:"accordion-style-5-2",
                accordionhref:"#accordion-style-5-2",
                time:"08:00 - 09:00",
                title: 'Energy blast',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson'
            },
            {
                accordionid:"accordion-style-5-3",
                accordionhref:"#accordion-style-5-3",
                time:"10:00 - 11:00",
                title: 'Cardio workout',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Jeremy dupont',

            },
            {
                accordionid:"accordion-style-5-4",
                accordionhref:"#accordion-style-5-4",
                time:"11:00 - 12:00",
                title: 'Athletics classes',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Edward watson'
            },
            {
                accordionid:"accordion-style-5-5",
                accordionhref:"#accordion-style-5-5",
                time:"13:00 - 15:00",
                title: 'Boxercise',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Bryan jonhson',

            }
        ]
    },
    {
        tabTitle: 'SATURDAY',
        tabicons: "",
        activities: [
            {
                accordionid:"accordion-style-5-1",
                accordionhref:"#accordion-style-5-1",
                time:"06:00 - 07:00",
                title: 'Energy blast',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                accordionid:"accordion-style-5-2",
                accordionhref:"#accordion-style-5-2",
                time:"08:00 - 09:00",
                title: 'Yoga and pilates',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson'
            },
            {
                accordionid:"accordion-style-5-3",
                accordionhref:"#accordion-style-5-3",
                time:"10:00 - 11:00",
                title: 'Cardio workout',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: ' By Jeremy dupont'
            },
            {
                accordionid:"accordion-style-5-4",
                accordionhref:"#accordion-style-5-4",
                time:"12:00 - 13:00",
                title: 'Boxercise',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Edward watson'
            },
            {
                accordionid:"accordion-style-5-5",
                accordionhref:"#accordion-style-5-5",
                time:"13:00 - 14:00",
                title: 'Athletics classes',
                content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
                author: 'By Bryan jonhson',

            },

        ]
    },
]

const TabData06 = [
    {
        tabTitle: 'MONDAY',
        day: "01 DAY",
        tabicons: "",
        activities: [
            {
                time: '09:00 - 10:00',
                img: 'https://via.placeholder.com/197x197',
                title: 'Cultures of creativity',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '10:00 - 12:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Reinventing experiences',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {

                time: '12:30 - 05:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Human centered design',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
        ]
    },
    {
        tabTitle: 'TUESDAY',
        day: "02 DAY",
        tabicons: "",
        activities: [
            {
                time: '09:00 - 10:00',
                img: 'https://via.placeholder.com/197x197',
                title: 'Cultures of creativity',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '10:00 - 12:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Reinventing experiences',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '12:30 - 05:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Human centered design',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
        ]
    }, {
        tabTitle: 'WEDNESDAY',
        day: "03 DAY",
        tabicons: "",
        activities: [
            {
                time: '09:00 - 10:00',
                img: 'https://via.placeholder.com/197x197',
                title: 'Cultures of creativity',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '10:00 - 12:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Reinventing experiences',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '12:30 - 05:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Human centered design',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
        ]
    }, {
        tabTitle: 'THURSDAY',
        day: "04 DAY",
        tabicons: "",
        activities: [
            {
                time: '09:00 - 10:00',
                img: 'https://via.placeholder.com/197x197',
                title: 'Cultures of creativity',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '10:00 - 12:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Reinventing experiences',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '12:30 - 05:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Human centered design',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
        ]
    }, {
        tabTitle: 'FRIDAY',
        day: "05 DAY",
        tabicons: "",
        activities: [
            {
                time: '09:00 - 10:00',
                img: 'https://via.placeholder.com/197x197',
                title: 'Cultures of creativity',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '10:00 - 12:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Reinventing experiences',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
            {
                time: '12:30 - 05:30',
                img: 'https://via.placeholder.com/197x197',
                title: 'Human centered design',
                content: 'Lorem ipsum is simply dummy text of the and typesetting industry lorem ipsum.',
                author: 'By Edward Watson'
            },
        ]
    },
]

const TabData07 = [
    {
        tabTitle: 'Turnaround consulting',
        featurebox: [
            {
                icon: "line-icon-Bakelite text-[#bf8c4c] text-[50px]",
                title: "Operational excellence",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            },
            {
                icon: "line-icon-Medal-2 text-[#bf8c4c] text-[50px]",
                title: "Innovative solutions",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            }
        ],
        title: 'Turnaround consulting',
        subtitle: "Can your business become better with new technology?",
        img: "https://via.placeholder.com/456x481",
        buttonTitle: "Discover service",
        buttonLink: "/page/our-services",
        tabicons: "",
    },
    {
        tabTitle: 'Strategic planning',
        featurebox: [
            {
                icon: "line-icon-Archery-2 text-[#bf8c4c] text-[50px]",
                title: "Consulting strategies",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            },
            {
                icon: "line-icon-Bar-Chart2 text-[#bf8c4c] text-[50px]",
                title: "Customer satisfaction",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            }
        ],
        title: 'Strategic planning',
        subtitle: "We work to ensure that your business prospers and brings",
        img: "https://via.placeholder.com/456x481",
        buttonTitle: "Discover service",
        buttonLink: "/page/our-services",
        tabicons: "",
    },
    {
        tabTitle: 'Investment planning',
        featurebox: [
            {
                icon: "line-icon-Coins text-[#bf8c4c] text-[50px]",
                title: "Finance and restructuring",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            },
            {
                icon: "line-icon-Coins-3 text-[#bf8c4c] text-[50px]",
                title: "Strategy and planning",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            }
        ],
        title: 'Investment planning',
        subtitle: "Can your business become better with new technology?",
        img: "https://via.placeholder.com/456x481",
        buttonTitle: "Discover service",
        buttonLink: "/page/our-services",
        tabicons: "",
    },
    {
        tabTitle: 'Expense reporting',
        featurebox: [
            {
                icon: "line-icon-Idea-5 text-[#bf8c4c] text-[50px]",
                title: "Business consulting",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            },
            {
                icon: "line-icon-Globe text-[#bf8c4c] text-[50px]",
                title: "Innovative solutions",
                content: "Lorem ipsum is simply dummy text of the printing typesetting ipsum been text."
            }
        ],
        title: 'Expense reporting',
        subtitle: "We work to ensure that your business prospers and brings",
        img: "https://via.placeholder.com/456x481",
        buttonTitle: "Discover service",
        buttonLink: "/page/our-services",
        tabicons: "",
    }
]

export { 
    TabDataMarcas,
    TabDataPorqueEscolher,
    TabData01,
    TabData02,
    TabData03,
    TabData05,
    TabData06,
    TabData07 
}