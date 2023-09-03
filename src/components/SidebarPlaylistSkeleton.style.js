import styled from 'styled-components'

export const SidebarItem = styled.div`
width: 250px;
height: 150px;

&:not(:last-child) {
  margin-bottom: 30px;
}
`

export const SidebarLink = styled.div`
width: 100%;
height: 100%;
display: block;
width: 250px;
height: 150px;
background-color: #f0f0f0; /* Цвет скелетона */
animation: pulse 1s infinite; /* Анимация "пульсации" */


}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.6;
  }
}

`

export const SidebarImg = styled.div`
width: 100%;
height: auto;
}
`