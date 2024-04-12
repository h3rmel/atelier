'use client';

// #region Import(s)

import { useState } from 'react';

import { useLanguage } from '@/ui/components/language/language-provider';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/ui/components/ui/select';

import { MARGIN_OPTONS, PADDING_OPTIONS, PX_REM_CONVERSION } from '../data/px-rem';
import { PX_REM_LANGUAGES } from '../languages/px-rem.lng';
import { InfoTable } from './info-table';

// #endregion

// Constant(s)
const FIRST_HALF = PX_REM_CONVERSION.slice(0, PX_REM_CONVERSION.length / 2);
const SECOND_HALF = PX_REM_CONVERSION.slice(PX_REM_CONVERSION.length / 2, PX_REM_CONVERSION.length);

/**
 * Renders the conversion tables for the given select option.
 *
 * @param {InfoTableProps} tableContent - the content for the info table
 * @return {JSX.Element} the conversion tables.
 */
export function ConversionTables(): JSX.Element {
  const [selectOption, setSelectOption] = useState<'gap' | PxRemPaddingType | PxRemMarginType>('gap');

  const { translate } = useLanguage();

  function handleChange(value: 'gap' | PxRemPaddingType | PxRemMarginType) {
    setSelectOption(value);
  }

  return (
    <>
      {/* Title */}
      <h2 className="text-2xl">{translate('conversion_table', PX_REM_LANGUAGES)}</h2>
      {/* SelectOption State */}
      <Select defaultValue={selectOption} onValueChange={handleChange}>
        <SelectTrigger className="max-w-[180px]">
          <SelectValue placeholder={translate('select_an_option', PX_REM_LANGUAGES)} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* Gap */}
            <SelectLabel>Gap</SelectLabel>
            <SelectItem value="gap">gap</SelectItem>
            {/* Padding */}
            <SelectLabel>Padding</SelectLabel>
            {PADDING_OPTIONS.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
            {/* Margin */}
            <SelectLabel>Margin</SelectLabel>
            {MARGIN_OPTONS.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Tables */}
      <div className="w-full flex items-center justify-around">
        <InfoTable selectOption={selectOption} tableContent={FIRST_HALF} />
        <InfoTable selectOption={selectOption} tableContent={SECOND_HALF} />
      </div>
    </>
  );
}
