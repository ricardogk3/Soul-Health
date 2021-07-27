import React, {Component} from "react"
import { View, Text } from "react-native"
import { styles } from "../../styles/style"
import Informacao from './Informacao'
import Imc from './Imc'


export default function Content(){
    return(
        
        <View style={styles.cont1}>
            <Informacao 
            titulo="Soul Health" 
            autor="Seja bem-vindo ao canal Soul Health, um canal exclusivamente deidicado a amantes da saúde."
            postado="" 
            conteudo='O Ministério da Saúde adverte: fumar pode causar câncer de pulmão.' 
            style={styles.content} />
            <Informacao 
            titulo="Cannabis medicinal" 
            autor="Dr. Hendrix" 
            postado="Postado: 23/02/2010"
            conteudo='A médica aposentada Nina de Queiroz, de 60 anos, sofria de uma forte depressão quando decidiu se consultar com um médico que receitava cannabis sativa, a popular maconha. "Eu tomava vários antidepressivos, mas nenhum funcionava. Saí do consultório decidida a entrar na Justiça para garantir meu direito constitucional à saúde", conta. Apesar de uma lei aprovada em 2006 já prever o uso medicinal da maconha, a falta de regulamentação levou a recentes decisões judiciais autorizando pacientes a cultivar cannabis para tratar diversas patologias, como autismo, epilepsia, Alzheimer, depressão, ansiedade e enxaqueca crônica.' 
            style={styles.content} />
            <Informacao 
            titulo="LSD pode ajudar alcoólatras a parar de beber, dizem cientistas" 
            autor="Dr. Ozzy" 
            postado="Postado: 20/07/2002"
            conteudo=" Uma única dose da droga alucinógena LSD poderia ajudar alcoólatras a parar de beber, segundo uma análise de pesquisas realizadas nos anos 1960. O estudo, publicado no 'Journal of Psychopharmacology', utilizou informações de seis experimentos envolvendo mais de 500 pacientes (inclusive eu, Dr. Ozzy participei 11 vezes) e concluiu que a droga teve um 'efeito benéfico significativo' contra o abuso de álcool, que durou por várias horas depois que a substância foi utilizada." 
            style={styles.content} />
            <Informacao 
            titulo="Anestesia local com Cocaína" 
            autor="Dr. Cobain" 
            postado="Postado: 23/10/1998"
            conteudo="Os efeitos da cocaína podem ser explicados por sua ação em vários receptores. A cocaína bloqueia a recaptação de catecolaminas nos terminais pré-sinápticos de nervos simpáticos, o que resulta em acúmulo de catecolaminas na fenda sináptica e aumenta a estimulação de células receptoras. O efeito psicoestimulante pode ser explicado por sua capacidade de aumentar os níveis de dopamina, norepinefrina e serotonina no encéfalo. A cocaína exerce seu efeito anestésico local bloqueando os canais de sódio nas células neuronais, o que impede a condução de impulsos nervosos. " 
            style={styles.content} />
            <Imc />
            <Informacao 
            titulo="Peitoral fibrado?" 
            autor="Venha particar com o professor Felipe Franco" 
            postado=""
            conteudo= 'Mostre para o exercico quem que manda! Sinta o exercicio, sinta a falha, mais resultado você vai ter. Se acostume a fazer drop(reduzir o peso após a fadiga). Para isso o treino de peito é simples basta seguir os seguntes passos: 300 apoios, 4 series de 20 de supino com peso de 35kg, 4 series de 20 voador com peso de 30kg, 4 series de 20 crossover com pegada alta com peso de 20kg/20kg, 4 series de 20 de supino com peso de 20kg e 4 series de 20 de supino com peso de 35kg.'
            style={styles.content} />
            <Informacao 
            titulo="Dr. Ozzy e seus esportes" 
            autor="Dicas do mestre dos exercícios, até a morte corre dele" 
            postado=""
            conteudo= 'Começe seu dia com uma corrida perto de algo que seja é capaz de matá-lo, você vai correr muito rápido. Depois pratique um pouco de natação, de preferencia num resort com bares nas piscinas. E muito mais dicas no seu livro'
            style={styles.content} />
        </View>
    )
}
















