import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeroSection from '../HeroSection.vue'

describe('HeroSection', () => {
  it('renders properly', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('h1').exists()).toBe(true)
  })
})
