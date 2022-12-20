import React from "react"
import StyledUserStatsGraph from "../../Styles/StyledUser/StyledUserStatsGraph"
import { VictoryBar, VictoryChart, VictoryPie } from "victory"

const UserStatsGraph = ({ data }) => {
  const [graph, setGraph] = React.useState([])
  const [acessos, setAcessos] = React.useState(0)

  React.useState(() => {
    if (data[0]) {
      const graph = data.map(({ title, acessos }) => {
        return {
          x: title,
          y: Number(acessos)
        }
      })

      const acessos = data
        .map(({ acessos }) => Number(acessos))
        .reduce((a, b) => a + b)

      setGraph(graph)

      setAcessos(acessos)
    }
  }, [data])

  if (!data[0]) return null
  return (
    <StyledUserStatsGraph>
      <p className="acessos">Acessos: {acessos}</p>
      <div className="graph-item">
        <VictoryPie
          data={graph}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          innerRadius={40}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 3
            },
            labels: {
              fontSize: 16,
              fill: "#333"
            }
          }}
        />
      </div>
      <div className="graph-item">
        <VictoryChart domainPadding={{ x: 20 }}>
          <VictoryBar
            alignment="middle"
            data={graph}
            barWidth={20}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </StyledUserStatsGraph>
  )
}

export default UserStatsGraph
