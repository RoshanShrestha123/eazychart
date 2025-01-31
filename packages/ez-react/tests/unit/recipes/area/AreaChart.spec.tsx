import React from 'react';
import { dimensions, pointsData } from 'eazychart-core/src/sample-data';
import { act, render, RenderResult, waitFor } from '@testing-library/react';
import { AreaChart } from '@/recipes/area/AreaChart';
import { RawData } from 'eazychart-core/src/types';
import 'tests/mocks/ResizeObserver';

describe('AreaChart', () => {
  it('renders an area chart', async () => {
    let wrapper: RenderResult;
    act(() => {
      // 1st render
      wrapper = render(
        <AreaChart
          data={pointsData as unknown as RawData}
          area={{
            stroke: 'red',
            strokeWidth: 2,
            fill: 'orange',
          }}
          color={'red'}
          marker={{
            hidden: false,
            color: 'red',
            radius: 2,
          }}
          grid={{ directions: [] }}
          dimensions={dimensions}
        />
      );
      expect(wrapper.container.innerHTML).toMatchSnapshot();
    });

    // 2nd render
    await waitFor(() => {
      expect(wrapper.container.innerHTML).toMatchSnapshot();
    });
  });
});
