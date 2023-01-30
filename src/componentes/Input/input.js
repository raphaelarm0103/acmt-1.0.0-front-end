import styled from 'styled-components'

const Input = styled.input`
    order: 1px solid #005215;
    background: transparent;
    border: 1px solid #005215;
    padding: 10px 200px;
    border-radius: 60px;
    width: 200px;
    color: #005215;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #005215;
            font-size: 16px;
}
`

export default Input