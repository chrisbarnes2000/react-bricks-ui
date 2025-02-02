import classNames from 'classnames'
import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { LayoutProp } from '../LayoutSideProps'

export interface DocumentsProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
}

const Documents: types.Brick<DocumentsProps> = ({
  bg,
  borderTop,
  borderBottom,
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={'lg'}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater
          propName="files"
          renderWrapper={items => (
            <ul className="w-full p-6 grid grid-cols-3 gap-6 ">{items}</ul>
          )}
          renderItemWrapper={item => <li>{item}</li>}
        />
      </Container>
    </Section>
  )
}

Documents.schema = {
  name: blockNames.Documents,
  label: 'Documents',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Documents.tsx',
  getDefaultProps: () => ({
    files: [
      {
        file: {
          name: 'React Bricks Website.pdf',
          size: 521.929,
          url:
            'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
        },
      },
      {
        file: {
          name: 'React Bricks Website.pdf',
          size: 521.929,
          url:
            'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
        },
      },
      {
        file: {
          name: 'React Bricks Website.pdf',
          size: 521.929,
          url:
            'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
        },
      },
    ],
  }),
  sideEditProps: [LayoutProp()],
  repeaterItems: [
    {
      name: 'files',
      itemType: blockNames.Document,
      itemLabel: 'Document',
    },
  ],
}

export default Documents
