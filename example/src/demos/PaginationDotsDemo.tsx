import {useState} from 'react';
import {Button, PaginationDots} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const PaginationDotsDemo = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      <Section title="Pressable dots">
        <PaginationDots count={5} index={page} onChange={setPage} />
        <Result label={`Page ${page + 1} of 5`} />
        <Button
          text="Next"
          rounded
          buttonColor={palette.navy}
          onPress={() => setPage((page + 1) % 5)}
        />
      </Section>
      <Section title="Variants">
        <PaginationDots
          count={4}
          index={1}
          expanding={false}
          activeColor={palette.red}
        />
        <PaginationDots
          count={6}
          index={3}
          size={12}
          gap={10}
          activeColor={palette.green}
          style={{marginTop: 16}}
        />
      </Section>
    </>
  );
};
