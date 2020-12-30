import { expect, should } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'

describe('Hero.vue', () => {
  it('renders the hero component', () => {
    const hero = shallowMount(Hero, {
      propsData: {
        title: 'title'
      }
    })
    should().exist(hero)
  })

  it('renders the hero title prop', () => {
    const title = 'title'
    const hero = shallowMount(Hero, {
      propsData: {
        title
      }
    })

    expect(hero.props().title).to.equal(title)
  })

  it('renders the correct id', () => {
    const hero = shallowMount(Hero, {
      propsData: {
        title: ''
      }
    })

    expect(hero.find('#hero').attributes().id).to.equal('hero')
  })
})
