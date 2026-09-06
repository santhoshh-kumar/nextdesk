'use client';

import type { ReactNode } from 'react';
import {
  AddBlockButton,
  DragHandleButton,
  type SideMenuProps,
  useExtensionState,
} from '@blocknote/react';
import { SideMenuExtension } from '@blocknote/core/extensions';

export const SIDE_MENU_FLOATING_OPTIONS = {
  useFloatingOptions: {
    middleware: [],
  },
};

export function CustomSideMenu(props: SideMenuProps & { children?: ReactNode }) {
  const block = useExtensionState(SideMenuExtension, {
    selector: (state) => state?.block,
  });

  const level = block?.props && 'level' in block.props ? (block.props.level as number) : undefined;

  return (
    <div className="bn-side-menu" data-block-type={block?.type} data-level={level}>
      {props.children || (
        <>
          <AddBlockButton />
          <DragHandleButton dragHandleMenu={props.dragHandleMenu} />
        </>
      )}
    </div>
  );
}
