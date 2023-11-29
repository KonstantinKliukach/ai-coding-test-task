import React from 'react';
import { SxProps } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { RootState } from '@/store';
import { Apis, selectApi } from '@/store/slices/apiSelectSlice';
import { Paper, useMediaQuery, useTheme } from '@mui/material';

const variants = Object.values(Apis);

interface ModeSelectProps {
  sx?: SxProps;
  size?: 'large' | 'small' | 'medium';
  orientation?: 'horizontal' | 'vertical';
}

const ModelSelect: React.FC<ModeSelectProps> = ({ sx, size, orientation }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const selected = useSelector((state: RootState) => state.apiSelectReducer.value.name);
  const dispatch = useDispatch();

  const handleApiSelectChange = (_: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => {
    const newSelected = variants.find((variant) => variant.name === value);
    if (newSelected) {
      dispatch(selectApi(newSelected));
    }
  };

  return (
    <Paper>
      <ToggleButtonGroup
        color="primary"
        value={selected}
        exclusive
        onChange={handleApiSelectChange}
        aria-label="apis"
        orientation={orientation}
        sx={{
          ...sx,
          display: isSmallScreen ? 'flex' : undefined,
          justifyContent: isSmallScreen ? 'center' : undefined,
          backgroundColor: 'paper',
        }}
      >
        {variants.map((variant) => (
          <ToggleButton size={size} key={variant.name} value={variant.name}>
            {variant.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Paper>
  );
};

export default ModelSelect;
