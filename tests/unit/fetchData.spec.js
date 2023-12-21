import { shallowMount } from '@vue/test-utils';
import CurrencyConverter from '@/components/CurrencyConverter.vue';

describe('CurrencyConverter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CurrencyConverter);
  });

  it('fetches data from the API', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      json: () => ({
        conversion_rates: {
          USD: 1,
          EUR: 0.85,
        },
      }),
    });
    global.fetch = mockFetch;

    await wrapper.vm.fetchData();

    expect(mockFetch).toHaveBeenCalledWith(
      'https://v6.exchangerate-api.com/v6/YourAPIKey/latest/USD'
    );
    expect(wrapper.vm.data).toEqual({
      conversion_rates: {
        USD: 1,
        EUR: 0.85,
      },
      time_last_update_utc: '2023-02-14T00:00:00Z',
    });
    expect(wrapper.vm.rate).toEqual(0.85);
  });
});