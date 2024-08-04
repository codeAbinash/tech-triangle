import type { StackNav } from '@utils/types'
import React from 'react'
import { Dimensions, ScrollView, Text, TextInput, View } from 'react-native'
import Animated, { runOnJS, useAnimatedKeyboard, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { height } = Dimensions.get('window')

export default function KeyboardAnimation({ navigation }: { navigation: StackNav }) {
  const keyboard = useAnimatedKeyboard()
  const bottom = useSafeAreaInsets().bottom
  const [stateHeight, setHeight] = React.useState(0)
  const translateStyle = useAnimatedStyle(() => {
    console.log('height', height)
    console.log('keyboard.height.value', keyboard.height.value)
    return {
      // transform: [{ translateY: -keyboard.height.value }],
      height: height - keyboard.height.value + bottom,
    }
  })

  function updateHeight(value: number) {
    setHeight(value)
  }

  useDerivedValue(() => {
    'worklet'
    runOnJS(updateHeight)(height)
    console.log('height', height)
  }, [keyboard.height.value])

  return (
    <>
      <Animated.View className='bg-gray-50 dark:bg-gray-950' style={[{ height }, translateStyle]}>
        <ScrollView>
          <View className='p-5'>
            <Text className='my-4 text-xl text-accent'>Keyboard Height: {height}</Text>
            <Text selectable>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi libero amet. Velit quia incidunt ea? Fuga laboriosam commodi
              placeat, totam aspernatur necessitatibus nisi! Quod similique explicabo dolor nisi quidem sequi earum vel sunt distinctio, minima, saepe
              nam quibusdam fugiat maxime. Veniam, vitae dolorem sint quis maiores facere rerum minima ea cupiditate velit nihil ipsa culpa
              repudiandae deleniti aliquam fuga tenetur hic aut amet nobis. Id ea laudantium, accusamus mollitia rerum rem qui quae. Placeat quibusdam
              itaque nemo. Officia iure non in, consequuntur ipsa quo ipsum optio? Voluptate nemo tenetur tempore consectetur eaque nobis vel, id
              laborum velit a sunt itaque ipsa, dolores ad nihil officia, ex temporibus minus. Voluptatibus rem nam veniam consequuntur beatae quos
              esse dolores dolorem molestias, saepe accusantium error amet rerum odio et laboriosam. Ad unde, quo, sint autem nisi incidunt sapiente
              est eaque quos nostrum doloribus esse? Laboriosam impedit possimus dicta iure accusamus at quos necessitatibus, laudantium veniam?
              Expedita, quam tempore. Molestiae, reiciendis provident ullam accusamus aperiam minus porro voluptatem minima laboriosam numquam tempora
              quos consectetur eveniet atque voluptate cum sunt dolores dicta, ut deserunt amet ipsum blanditiis quo saepe. Inventore hic odio quo
              maxime corporis, omnis debitis exercitationem distinctio blanditiis fugiat modi accusamus ratione, similique maiores delectus
              praesentium consequatur perferendis soluta. Nesciunt provident doloribus deleniti velit aut voluptatibus explicabo iusto, nam eligendi
              suscipit, corrupti dolorem deserunt possimus repudiandae ipsum ipsam quis molestiae, veritatis odit? Libero error nam laudantium?
              Quaerat impedit ipsum atque mollitia aliquid provident, veniam culpa laborum tempora repellat. Facilis molestias sit earum eos eius,
              explicabo autem illo velit assumenda quae cupiditate dolore, ex fuga, mollitia possimus esse magni. Quaerat quasi ipsum dolor
              dignissimos suscipit dolore temporibus excepturi at incidunt numquam voluptate cupiditate voluptates quod sint sit vero ea, ullam quidem
              repudiandae distinctio qui eaque? Itaque voluptatem sunt minima! Quis maxime reiciendis dolor deleniti unde quod eius quisquam sapiente
              voluptate excepturi! Voluptas, velit perferendis! Modi, velit porro eveniet illum expedita rem sit magni, sequi natus consectetur
              dolorum. Reprehenderit similique nam minima id quam consectetur nobis ut nostrum qui officia veniam modi consequuntur eius sunt quis et,
              vel eveniet. Perspiciatis est magni officia? Itaque voluptates quod rerum dolore, nisi eligendi obcaecati odit voluptate odio. Qui
              corporis, consectetur velit minima exercitationem recusandae! Laborum reprehenderit eligendi cum officia ipsum quibusdam vel alias! Iste
              ipsa voluptatum eveniet at nam, quis ea illo reprehenderit debitis nesciunt repellendus quod velit officia rerum ducimus ipsum
              temporibus praesentium et assumenda quas explicabo. Assumenda, alias? In, magnam libero nisi exercitationem, laboriosam animi fugit
              optio, ipsa qui debitis iusto maxime dolor eveniet tempore. Magnam velit voluptatibus illo explicabo impedit dicta molestiae vero
              nostrum praesentium, quasi deleniti repellendus provident hic, magni officia dolores temporibus molestias non reprehenderit quisquam
              animi? Vitae, autem animi consequuntur minima omnis deserunt aut pariatur sunt officiis unde, eum nihil vel repudiandae recusandae sed
              praesentium nostrum rerum, qui enim quidem? Fugit temporibus, rerum in labore officia cupiditate ab voluptas dolore harum et, molestias
              culpa suscipit vero ducimus possimus dolorum odio accusamus quo autem? Distinctio laborum at fugit mollitia id vitae iusto libero
              deserunt, est rem voluptate eaque reiciendis natus incidunt cum enim voluptates dolorem obcaecati, aut saepe vel minima tempora! Esse
              sint totam, doloremque tenetur architecto ratione ea facere aspernatur at earum voluptas nostrum odit recusandae, rerum, obcaecati
              provident id error assumenda quis cupiditate consequatur? Rerum dolore nobis quasi ipsam voluptatem, debitis, dolores modi reprehenderit
              voluptates quo consequatur nulla, deserunt ducimus. Nisi accusamus et maiores beatae itaque ab laboriosam explicabo rerum mollitia
              nesciunt quibusdam est officiis, quidem temporibus id? Modi reprehenderit assumenda animi non quae sit, saepe libero quidem? Quis
              consequatur ipsum excepturi obcaecati ducimus magnam consequuntur tempore natus at in. Rerum, excepturi corrupti modi quas quos cumque
              ad nam, quod id veritatis voluptas expedita? Ipsa eligendi quas amet dolorem maxime architecto eos adipisci ab! Quis, cupiditate
              repellat! Unde adipisci voluptate labore omnis ad doloremque, tempore laboriosam, repudiandae vitae voluptatum tenetur numquam? Earum et
              sed nobis quae quia ut unde placeat quaerat itaque recusandae nisi dolore tempore delectus pariatur vero corporis, accusamus consectetur
              maxime consequuntur harum aliquid? Sunt illum necessitatibus dolor molestiae dolore. Error quo veniam inventore odit asperiores
              voluptatum suscipit magni dolorum explicabo illo iste eius dicta pariatur placeat quos eligendi, quasi, nam nulla ratione! Dolor
              accusamus placeat ab repellat. Animi possimus nam, dolorem quisquam debitis excepturi, sunt consectetur praesentium unde, beatae ad.
            </Text>
          </View>
        </ScrollView>
        <Animated.View className='w-full'>
          <TextInput className='bg-gray-100' />
        </Animated.View>
      </Animated.View>
    </>
  )
}

// import { View, Text } from 'react-native'
// import React from 'react'

// export default function KeyboardAnimation() {
//   return (
//     <View className='flex-1 items-center justify-center bg-white'>
//       <Text>Keyboard Animation</Text>
//     </View>
//   )
// }
