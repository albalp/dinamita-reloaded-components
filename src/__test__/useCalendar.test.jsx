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

    test('Should to have 28 days when the year is not leap', () => {

        const { result } = renderHook(() => useCalendar());

        act(() => {
           result.current.getTotalDays(1);
        }); 

        expect(result.current.daysMonth.length).toBe(28);
        expect(result.current.daysMonth.length).not.toBe(29);
 
    });

    test('Should to have 29 days when the year is leap', () => {

        const { result } = renderHook(() => useCalendar());

        act(() => {
            result.current.calendar.year = 2020;
            result.current.getTotalDays(1);
        }); 

        expect(result.current.daysMonth.length).toBe(29);
        expect(result.current.daysMonth.length).not.toBe(28);
 
    }); 


});
