import { renderHook, act } from '@testing-library/react-hooks'
import { useModal } from '../components/modal/useModal';
 
describe('Testing of useModal hook', () => {

    test('Should to be true when the modal is open', () => {
 
        const { result } = renderHook(() => useModal());
        
        act(() => {
            result.current.openModal();
         });
 
        expect(result.current.isOpen).toBeTruthy();
    });

    test('Should to be false when the modal is not open', () => {

        const { result } = renderHook(() => useModal());
        
        act(() => { 
            result.current.closeModal();
         }); 

         
        expect(result.current.isOpen).not.toBeTruthy();
    }); 

}); 