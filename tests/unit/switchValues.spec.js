import { shallowMount } from '@vue/test-utils';
import CurrencyConverter from '@/components/CurrencyConverter.vue';

describe('CurrencyConverter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CurrencyConverter);
  });

  it('switches the values of currency_one and currency_two', () => {
    wrapper.vm.switchValues();
    expect(wrapper.vm.currency_one).toBe('EUR');
    expect(wrapper.vm.currency_two).toBe('USD');
  });
});