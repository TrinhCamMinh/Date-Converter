import { DateInput } from '@/components/customs';
import { useState, useRef } from 'react';
import { convertDate } from '@/lib/utils';
import { Toaster, toast } from 'sonner';

const Converter = ({ className }: { className?: string }) => {
    const dateInputRef = useRef<HTMLInputElement>(null);
    const dateOutputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleConverted = () => {
        try {
            setIsLoading(true);
            const dateInput: HTMLInputElement | null = dateInputRef.current;
            const dateOutput: HTMLInputElement | null = dateOutputRef.current;
            const dateInputValue = dateInput?.value;

            // ❌: Exception happened by missing useRef for both inputs
            if (!dateOutput || !dateInput) {
                toast.error('There was something wrong. Please comeback later 😓');
                return;
            }

            // ❌: Exception happened because user did not input value to convert
            if (!dateInputValue) {
                toast.error('Please enter a date need converted 😓');
                dateOutput.value = ''; // clear previous value for converted's result input
                setIsLoading(false);
                return;
            }

            const convertedDate = convertDate(dateInputValue);
            // ✅ Attach the converted result to the output component
            dateOutput.value = convertedDate.toDateString();
            setIsLoading(false);
        } catch (e: unknown) {
            const error = e as Error;
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    const handleClearData = () => {
        const dateInput: HTMLInputElement | null = dateInputRef.current;
        const dateOutput: HTMLInputElement | null = dateOutputRef.current;

        if (!dateInput || !dateOutput) return;

        dateInput.value = '';
        dateOutput.value = '';
        dateInput.focus(); // refocus the input date element
    };

    return (
        <div className={`${className} text-center`}>
            <Toaster position='top-center' richColors />
            <div id='input-date-container' className='flex flex-row items-center gap-8'>
                <DateInput className='grow' placeholder='Ex: 2023-08-02T18:30:00Z' ref={dateInputRef} />
            </div>

            <div className='divider uppercase'>converted</div>

            <div className='flex flex-col gap-4'>
                <div id='output-date-container' className='flex flex-row items-center gap-8'>
                    <DateInput className='grow' readOnly placeholder='Ex: Thu Aug 03 2023' ref={dateOutputRef} />
                </div>
            </div>

            {/* Convert / Clear buttons  */}
            <div className='grid grid-cols-4 gap-4'>
                <div id='convert-button-container' className='col-span-3 mt-4'>
                    <button
                        className=' btn-block btn btn-success text-white uppercase leading-loose'
                        onClick={handleConverted}
                        disabled={isLoading}
                    >
                        {isLoading && <span className='loading loading-spinner'></span>}
                        {isLoading ? 'converting...' : 'convert'}
                    </button>
                </div>
                <button
                    className='btn btn-error col-span-1 mt-4 uppercase text-white leading-loose'
                    onClick={handleClearData}
                >
                    clear
                </button>
            </div>
        </div>
    );
};

export default Converter;
