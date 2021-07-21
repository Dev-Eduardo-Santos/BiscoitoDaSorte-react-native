
import React, { Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      textoFrase: 'A vida trará coisas boas se tiveres paciência.',
      img: require('./src/assetes/biscoito.png')
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      ' Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      ' Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vai mais longe do que muito conhecimento.',
      'Quem quer colher rosas deve suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.',
      'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',
      'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
      'Uma bela flor é incompleta sem suas folhas.',
      'Sem o fogo do entusiasmo, não há o calor da vitória.',
      'Não há melhor negócio que a vida. A gente há obtém a troco de nada.',
      'O riso é a menor distância entre duas pessoas.',
      'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
      'É mais fácil conseguir o perdão do que a permissão.',
      'Os defeitos são mais fortes quando o amor é fraco.',
      'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
      'Surpreender e ser surpreendido é o segredo do amor.',
      'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
      'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
      'A paciência na adversidade é o sinal de um coração sensível.',
      'A sorte favorece a mente bem preparada.',
      'Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.']
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/assetes/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}> 
        <Image style={styles.img} source={ this.state.img} />
        <Text style={styles.textoFrase} >"{ this.state.textoFrase }"</Text>

        <TouchableOpacity style={styles.button} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
             Quebrar biscoito
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 250,
    height: 250,
  },
  button: {
    width: 250,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#dd7b22'
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoFrase: {
    fontSize: 25,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
