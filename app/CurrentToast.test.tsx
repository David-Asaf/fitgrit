/// <reference types="jest" />
// @jest-environment jsdom
import { render } from '@testing-library/react-native'
import { CurrentToast } from './CurrentToast'

jest.mock('@tamagui/toast', () => ({
  useToastState: jest.fn(),
  Toast: ({ children }: any) => <>{children}</>,
}))

describe('CurrentToast', () => {
  it('renders null when there is no toast state', () => {
    const { useToastState } = require('@tamagui/toast')
    useToastState.mockReturnValue(null)
    const { toJSON } = render(<CurrentToast />)
    expect(toJSON()).toBeNull()
  })
})
