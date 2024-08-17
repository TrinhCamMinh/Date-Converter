import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DateInput, CloneConverterResultGroup } from "@/components/customs";
import { useState, useRef } from "react";
import { convertDate } from "@/lib/utils";
import { Toaster, toast } from "sonner";

const Converter = ({ className }: { className?: string }) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dateOutputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [dateSourceType, setDataSourceType] = useState<string>("auto");
  // const [dateDestinationType, setDestinationType] = useState<string>("local");

  // const handleDateTypeFormatChange = (selectedOption: string) => {
  //   setDataSourceType(selectedOption);
  // };

  // const handleDateDestinationTypeChange = (selectedOption: string) => {
  //   setDestinationType(selectedOption);
  // };

  const handleConverted = () => {
    try {
      setIsLoading(true);
      const dateInput: HTMLInputElement | null = dateInputRef.current;
      const dateOutput: HTMLInputElement | null = dateOutputRef.current;
      const dateInputValue = dateInput?.value;

      // ❌: Exception happend by missing useRef for both inputs
      if (!dateOutput || !dateInput) {
        toast.error("There was something worng. Please comeback later 😓");
        return;
      }

      // ❌: Exception happend because user did not input value to convert
      if (!dateInputValue) {
        toast.error("Please enter a date need converted 😓");
        dateOutput.value = ""; // clear previous value for converted's result input
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

  return (
    <div className={`${className} text-center`}>
      <Toaster position="top-center" richColors />
      <div id="input-date-container" className="flex flex-row items-center gap-8">
        {/* <Select value={dateSourceType} onValueChange={(selectedOption: string) => handleDateTypeFormatChange(selectedOption)}>
          <SelectTrigger className="w-3/12 tooltip" data-tip={dateSourceType}>
            <SelectValue placeholder="Select a date format" />
          </SelectTrigger>
          <SelectContent className="mt-2">
            <SelectGroup>
              <SelectLabel>Time Zone Type</SelectLabel>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="est">ISO</SelectItem>
              <SelectItem value="cst">Timestamp</SelectItem>
              <SelectItem value="mst">RFC 3339</SelectItem>
              <SelectItem value="pst">RFC 2822</SelectItem>
              <SelectItem value="akst">UTC</SelectItem>
              <SelectItem value="akst">Local</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}

        <DateInput className="grow" placeholder="Source Date - Ex: 2023-03-28" ref={dateInputRef} />
      </div>

      <div className="divider uppercase">converted</div>

      <div className="flex flex-col gap-4">
        <div id="output-date-container" className="flex flex-row items-center gap-8">
          {/* <Select value={dateDestinationType} onValueChange={(selectedOption: string) => handleDateDestinationTypeChange(selectedOption)}>
            <SelectTrigger className="w-3/12 tooltip" data-tip={dateDestinationType}>
              <SelectValue placeholder="Select a date format" />
            </SelectTrigger>
            <SelectContent className="mt-2">
              <SelectGroup>
                <SelectLabel>Time Zone Type</SelectLabel>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="est">ISO</SelectItem>
                <SelectItem value="cst">Timestamp</SelectItem>
                <SelectItem value="mst">RFC 3339</SelectItem>
                <SelectItem value="pst">RFC 2822</SelectItem>
                <SelectItem value="akst">UTC</SelectItem>
                <SelectItem value="local">Local</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
          <DateInput className="grow" readOnly placeholder="Converted Date - Ex: 15-1-2023" ref={dateOutputRef} />
        </div>
      </div>

      <CloneConverterResultGroup onClick={handleConverted} isLoading={isLoading} />
    </div>
  );
};

export default Converter;
