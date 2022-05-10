import { renderHook, act } from '@testing-library/react-hooks'
import { useCalendar } from '../hooks/useCalendar';

describe('Test hook useCalendar', () => {

    test('Should to have 31 days when the function getTotalDays receive -1', () => {

        const { result } = renderHook(() => useCalendar());
 
        act(() => {
            result.current.getTotalDays(-1);
          });

          expect(result.current.daysMonth.length).toBe(31);

    }); 

    test('Should to have 28 days when the year is leap', () => {

        const { result } = renderHook(() => useCalendar());

        let monthLeap = true;

        act(() => {
           result.current.getTotalDays(monthLeap);
        }); 

        expect(result.current.daysMonth.length).toBe(28);

    });

    test('Should to have 29 days when the year is not leap', () => {

        const { result } = renderHook(() => useCalendar());

        let monthLeap = false;

        act(() => {
            result.current.getTotalDays(monthLeap);
        });

        expect(result.current.daysMonth.length).toBe(29);

    });

});
