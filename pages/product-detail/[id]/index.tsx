import { GetServerSideProps } from 'next'

import ProductDetailPage, {
  Props as PageProps,
} from 'src/pages/ProductDetailPage'

type Params = { id: string }

export const getServerSideProps: GetServerSideProps<
  PageProps,
  Params
> = async ({ locale, params }) => {
  const id = params?.id?.toString() || ''

  if (!id) {
    return { notFound: true }
  }

  return {
    props: {
      id: parseInt(id),
    },
  }
}

export default ProductDetailPage
