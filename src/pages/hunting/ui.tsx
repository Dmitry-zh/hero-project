import { HuntingFeature } from '~/features/hunting'
import { Engine } from '~/shared/model'

export function Hunting() {
  const { usePlayer } = Engine.playerModel

  const player = usePlayer()
  const mob = Engine.ratMob()

  return <HuntingFeature player={player} mob={mob} />
}
