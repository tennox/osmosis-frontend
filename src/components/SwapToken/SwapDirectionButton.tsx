import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
import { cssAbsoluteCenter } from 'src/emotionStyles/layout';

export function SwapDirectionButton(props: HTMLAttributes<HTMLButtonElement>) {
	return (
		<SwapDirectionButtonContainer {...props}>
			<DirectionBgImg src="/public/assets/sidebar/icon-border_unselected.svg" />
			<SwitchImg src="/public/assets/Icons/Switch.svg" />
		</SwapDirectionButtonContainer>
	);
}

const SwapDirectionButtonContainer = styled.button`
	${cssAbsoluteCenter};
	width: 3rem;
	height: 3rem;
	z-index: 1;
`;

const DirectionBgImg = styled.img`
	width: 3rem;
	height: 3rem;
`;

const SwitchImg = styled.img`
	${cssAbsoluteCenter};
	width: 1.5rem;
	height: 1.5rem;
`;
