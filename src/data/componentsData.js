export const componentsData = [
  {
    id: 'view',
    num: '01',
    name: 'View',
    category: 'Core',
    tagline: 'Fundamental layout box for grouping elements and flexbox layouts',
    importStatement: "import { View, Text } from 'react-native';",
    description: "Think of View like a <div> in web development. It is the core container box used to structure and group elements on the screen. On iPhone (iOS), it turns into a native UIView, and on Android, it becomes a ViewGroup. You use View to build layout cards, flexbox rows, set background colors, padding, margins, and rounded borders.",
    props: [
      { name: 'style', type: 'ViewStyle', default: 'undefined', desc: 'Sets layout styles like flexbox direction, padding, margin, background color, and borders.' },
      { name: 'onLayout', type: 'Function', default: 'undefined', desc: 'Fires when the element is rendered, giving exact width, height, and x/y screen position.' },
      { name: 'accessibilityLabel', type: 'string', default: 'undefined', desc: 'Text label read aloud by screen readers for accessibility.' },
      { name: 'pointerEvents', type: "'auto'|'none'|'box-none'|'box-only'", default: "'auto'", desc: 'Controls whether touches pass through to child elements or trigger on the view.' }
    ],
    useCases: [
      'Wrapper container cards for screen sections',
      'Grouping multiple text lines or images into flexbox rows and columns',
      'Creating visual dividers, spacer views, and background cards'
    ],
    codeExamples: [
      {
        title: 'Basic View Container Example',
        code: `import { View, Text, StyleSheet } from 'react-native';

export default function ViewExample() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card Title</Text>
      <Text style={styles.body}>View groups these text elements and applies rounded corners with padding.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 8,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#1d1d1f' },
  body: { fontSize: 15, color: '#7a7a7a', lineHeight: 22 },
});`
      }
    ],
    previewType: 'view'
  },
  {
    id: 'text',
    num: '02',
    name: 'Text',
    category: 'Core',
    tagline: 'Renders strings with support for styling, nesting, and line clipping',
    importStatement: "import { Text, View } from 'react-native';",
    description: "In React Native, raw text cannot float inside a View. Every single string or word MUST be wrapped inside a <Text> component! On iPhone (iOS), it turns into UILabel/UITextView, and on Android into TextView. Text supports font sizing, bolding, custom text colors, nested inline styling, and automatic line clipping with ellipsis (...).",
    props: [
      { name: 'style', type: 'TextStyle', default: 'undefined', desc: 'Sets fontSize, fontWeight, color, lineHeight, and textAlign.' },
      { name: 'numberOfLines', type: 'number', default: 'undefined', desc: 'Clips text with ellipsis (...) after specified number of lines.' },
      { name: 'ellipsizeMode', type: "'head'|'middle'|'tail'|'clip'", default: "'tail'", desc: 'Determines where ellipsis appears when text is clipped.' },
      { name: 'onPress', type: 'Function', default: 'undefined', desc: 'Callback invoked when text or inline link is tapped.' }
    ],
    useCases: [
      'Displaying screen titles, paragraph copy, captions, and labels',
      'Styling specific words inline (e.g. bolding one word inside a sentence)',
      'Clickable inline links or hashtag tags'
    ],
    codeExamples: [
      {
        title: 'Nested Text Example',
        code: `import { Text, View, StyleSheet } from 'react-native';

export default function TextExample() {
  return (
    <View style={styles.box}>
      <Text style={styles.heading}>
        Welcome to <Text style={styles.highlight}>React Native</Text>
      </Text>
      <Text style={styles.body} numberOfLines={2}>
        Text components can be nested inside each other to easily inherit base styles while overriding specific inline words with custom colors or font weights.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 16, gap: 8 },
  heading: { fontSize: 22, fontWeight: '600', color: '#1d1d1f' },
  highlight: { color: '#0066cc' },
  body: { fontSize: 15, color: '#7a7a7a', lineHeight: 22 },
});`
      }
    ],
    previewType: 'text'
  },
  {
    id: 'image',
    num: '03',
    name: 'Image',
    category: 'Core',
    tagline: 'Displays local picture assets or remote internet photos',
    importStatement: "import { Image } from 'react-native';",
    description: "The Image component displays photos and icons in your app. It can load local images saved in your project (using require('./logo.png')) or remote pictures from the internet (using { uri: 'https://...' }). On iPhone (iOS), it maps to UIImageView, and on Android to ImageView. Always set width and height for remote internet images so they render correctly.",
    props: [
      { name: 'source', type: 'object|number', default: 'required', desc: 'Remote URL ({uri: "https://..."}) or local file require("./img.png").' },
      { name: 'resizeMode', type: "'cover'|'contain'|'stretch'|'center'", default: "'cover'", desc: 'Controls how picture scales within frame bounds.' },
      { name: 'borderRadius', type: 'number', default: '0', desc: 'Rounds image corners.' }
    ],
    useCases: [
      'User profile avatars and hero banners',
      'E-commerce product thumbnails',
      'App branding logos and static icon assets'
    ],
    codeExamples: [
      {
        title: 'Remote Image Example',
        code: `import { Image, View, StyleSheet } from 'react-native';

export default function ImageExample() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/400/240' }}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  img: { width: '100%', height: 200, borderRadius: 12 },
});`
      }
    ],
    previewType: 'image'
  },
  {
    id: 'textinput',
    num: '04',
    name: 'TextInput',
    category: 'Controls',
    tagline: 'Text entry box for user input, search fields, and password forms',
    importStatement: "import { TextInput } from 'react-native';",
    description: "The TextInput component lets users type text, numbers, or passwords using their phone's soft keyboard. On iPhone (iOS), it becomes UITextField/UITextView, and on Android EditText. You can customize placeholder text, password masking (secureTextEntry), and keyboard layout (email, phone pad, numeric).",
    props: [
      { name: 'value', type: 'string', default: "''", desc: 'Current input text state.' },
      { name: 'onChangeText', type: 'Function', default: 'undefined', desc: 'Callback invoked whenever user types or edits text.' },
      { name: 'placeholder', type: 'string', default: 'undefined', desc: 'Gray placeholder text displayed when input is empty.' },
      { name: 'secureTextEntry', type: 'boolean', default: 'false', desc: 'Hides typed characters with dots for password security.' },
      { name: 'keyboardType', type: "'default'|'email-address'|'numeric'|'phone-pad'", default: "'default'", desc: 'Determines phone soft keyboard type.' }
    ],
    useCases: [
      'User login and registration form fields',
      'Search bars with live query filtering',
      'Multiline note taking and message boxes'
    ],
    codeExamples: [
      {
        title: 'Interactive Form Input Example',
        code: `import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function TextInputExample() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.group}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="alex@example.com"
        keyboardType="email-address"
        style={styles.input}
      />
      <Text style={styles.hint}>Typed value: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  group: { padding: 16, gap: 6 },
  label: { fontSize: 14, fontWeight: '600', color: '#1d1d1f' },
  input: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, padding: 12, fontSize: 16 },
  hint: { fontSize: 13, color: '#0066cc' },
});`
      }
    ],
    previewType: 'textinput'
  },
  {
    id: 'button',
    num: '05',
    name: 'Button',
    category: 'Controls',
    tagline: 'Simple platform-native button for basic click actions',
    importStatement: "import { Button } from 'react-native';",
    description: "The Button component is a ready-to-use button built into React Native. On iPhone (iOS), it renders as a blue text button (UIButton), and on Android as a Material solid button. It has simple props like title and onPress. For custom styled buttons, developers prefer Pressable.",
    props: [
      { name: 'title', type: 'string', default: 'required', desc: 'Text label shown inside button.' },
      { name: 'onPress', type: 'Function', default: 'required', desc: 'Handler called when user taps button.' },
      { name: 'color', type: 'string', default: 'undefined', desc: 'Button background color on Android or text color on iOS.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disables tap events.' }
    ],
    useCases: [
      'Simple form submission buttons',
      'Dialog action triggers (OK / Cancel)',
      'Quick prototype screens'
    ],
    codeExamples: [
      {
        title: 'Standard Button Example',
        code: `import { Button, View, Alert, StyleSheet } from 'react-native';

export default function ButtonExample() {
  return (
    <View style={styles.box}>
      <Button
        title="Submit Form"
        color="#0066cc"
        onPress={() => Alert.alert('Saved', 'Form submitted!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 16 },
});`
      }
    ],
    previewType: 'button'
  },
  {
    id: 'pressable',
    num: '06',
    name: 'Pressable',
    category: 'Controls',
    tagline: 'Modern, highly customizable touch primitive for building custom controls',
    importStatement: "import { Pressable, Text } from 'react-native';",
    description: "The Pressable component is the modern, recommended way to create custom buttons, cards, or clickable icons in React Native. Unlike the simple Button, Pressable detects touch states (pressed in, released, held down) and allows dynamic styling based on user interaction.",
    props: [
      { name: 'onPress', type: 'Function', default: 'undefined', desc: 'Called when user releases tap.' },
      { name: 'onLongPress', type: 'Function', default: 'undefined', desc: 'Called when user holds press down.' },
      { name: 'style', type: 'Function|object', default: 'undefined', desc: 'Can take callback ({ pressed }) => [...] to animate active button states.' }
    ],
    useCases: [
      'Custom branded action buttons with active press states',
      'Clickable card wrappers and list item rows',
      'Custom header icon buttons'
    ],
    codeExamples: [
      {
        title: 'Dynamic Pressable Pill Example',
        code: `import { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

export default function PressableExample() {
  const [status, setStatus] = useState('Ready');

  return (
    <View style={{ gap: 10 }}>
      <Pressable
        onPress={() => setStatus('Action Completed!')}
        style={({ pressed }) => [
          styles.btn,
          pressed && styles.btnPressed
        ]}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
      <Text style={styles.status}>Status: {status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#0066cc', padding: 14, borderRadius: 25, alignItems: 'center' },
  btnPressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  btnText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  status: { textAlign: 'center', color: '#7a7a7a', fontSize: 14 },
});`
      }
    ],
    previewType: 'pressable'
  },
  {
    id: 'touchableopacity',
    num: '07',
    name: 'TouchableOpacity',
    category: 'Controls',
    tagline: 'Touch wrapper that dims opacity when tapped',
    importStatement: "import { TouchableOpacity, Text } from 'react-native';",
    description: "The TouchableOpacity component is a touch wrapper that dims its opacity (gets slightly transparent) when a user taps it. It gives users immediate visual feedback that their tap was received. Widely used in React Native apps.",
    props: [
      { name: 'activeOpacity', type: 'number', default: '0.2', desc: 'Opacity value (0.0 - 1.0) when pressed.' },
      { name: 'onPress', type: 'Function', default: 'undefined', desc: 'Tap handler callback.' }
    ],
    useCases: [
      'Touch list rows in settings screens',
      'Header icons and navigation buttons'
    ],
    codeExamples: [
      {
        title: 'TouchableOpacity Item Example',
        code: `import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TouchableOpacityExample() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => alert('Item tapped')}
      style={styles.touchable}
    >
      <Text style={styles.text}>Tap to Dim Opacity</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: { backgroundColor: '#1d1d1f', padding: 14, borderRadius: 8 },
  text: { color: '#ffffff', textAlign: 'center', fontWeight: '500' },
});`
      }
    ],
    previewType: 'touchableopacity'
  },
  {
    id: 'touchablehighlight',
    num: '08',
    name: 'TouchableHighlight',
    category: 'Controls',
    tagline: 'Touch wrapper that reveals background underlay color when pressed',
    importStatement: "import { TouchableHighlight, Text } from 'react-native';",
    description: "The TouchableHighlight component is a touch wrapper that changes its background color (revealing an underlay color) when pressed. Commonly used for settings list rows or table cells where you want a dark underlay highlight when tapped.",
    props: [
      { name: 'underlayColor', type: 'string', default: "'black'", desc: 'Background color shown while active.' },
      { name: 'onPress', type: 'Function', default: 'undefined', desc: 'Tap callback.' }
    ],
    useCases: [
      'List item rows in settings menus',
      'Table view cells with highlight color feedback'
    ],
    codeExamples: [
      {
        title: 'TouchableHighlight Settings Row Example',
        code: `import { useState } from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

export default function TouchableHighlightExample() {
  const [active, setActive] = useState(false);

  return (
    <View style={{ gap: 8 }}>
      <TouchableHighlight
        underlayColor="#e0e0e0"
        onPress={() => setActive(!active)}
        style={[styles.row, active && styles.rowActive]}
      >
        <Text style={[styles.text, active && styles.textActive]}>
          Account Settings {active ? '✓ Enabled' : ''}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { padding: 16, backgroundColor: '#f5f5f7', borderRadius: 8 },
  rowActive: { backgroundColor: '#e8f0fe' },
  text: { fontSize: 16, color: '#1d1d1f' },
  textActive: { color: '#0066cc', fontWeight: '600' },
});`
      }
    ],
    previewType: 'touchablehighlight'
  },
  {
    id: 'touchablewithoutfeedback',
    num: '09',
    name: 'TouchableWithoutFeedback',
    category: 'Controls',
    tagline: 'Captures user taps without presenting visual feedback',
    importStatement: "import { TouchableWithoutFeedback, View } from 'react-native';",
    description: "The TouchableWithoutFeedback component captures user taps without showing any visual ripple or color change. Its most common real-world use is wrapping screen background views so that tapping outside an input field automatically closes (dismisses) the soft keyboard.",
    props: [
      { name: 'onPress', type: 'Function', default: 'undefined', desc: 'Tap handler callback.' }
    ],
    useCases: [
      'Screen background touch area to dismiss active keyboard',
      'Invisible click boundary regions'
    ],
    codeExamples: [
      {
        title: 'Dismiss Keyboard Background Example',
        code: `import { TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet } from 'react-native';

export default function DismissKeyboardExample() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.info}>Tap outside input to dismiss soft keyboard.</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, justifyContent: 'center' },
  info: { color: '#7a7a7a', textAlign: 'center' },
});`
      }
    ],
    previewType: 'touchablewithoutfeedback'
  },
  {
    id: 'scrollview',
    num: '10',
    name: 'ScrollView',
    category: 'Lists',
    tagline: 'Scrollable layout container for bounded or static page content',
    importStatement: "import { ScrollView, Text } from 'react-native';",
    description: "The ScrollView component is a scrollable container for small or fixed-length content (like forms, article text, or settings screens). On iPhone (iOS), it becomes UIScrollView, and on Android ScrollView. Note: ScrollView renders all child items in memory at once, so for very long lists, use FlatList instead to save memory.",
    props: [
      { name: 'contentContainerStyle', type: 'ViewStyle', default: 'undefined', desc: 'Styles inner scroll wrapper (padding, gaps).' },
      { name: 'horizontal', type: 'boolean', default: 'false', desc: 'Enables horizontal scrolling instead of vertical.' },
      { name: 'showsVerticalScrollIndicator', type: 'boolean', default: 'true', desc: 'Shows or hides scrollbar.' }
    ],
    useCases: [
      'Form screens with multiple inputs',
      'Horizontal card carousels',
      'Article body text screens'
    ],
    codeExamples: [
      {
        title: 'Vertical ScrollView Example',
        code: `import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function ScrollViewExample() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 8 }).map((_, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.title}>Item Row #{i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 10 },
  card: { padding: 14, backgroundColor: '#ffffff', borderRadius: 8, borderWidth: 1, borderColor: '#e0e0e0' },
  title: { fontWeight: '500', color: '#1d1d1f' },
});`
      }
    ],
    previewType: 'scrollview'
  },
  {
    id: 'flatlist',
    num: '11',
    name: 'FlatList',
    category: 'Lists',
    tagline: 'Performant virtualized list component for long datasets',
    importStatement: "import { FlatList, Text, View } from 'react-native';",
    description: "The FlatList component is a smart, high-performance list maker for long datasets (like social media feeds, product catalogs, or chat logs). On iPhone (iOS) it uses UICollectionView/UITableView, and on Android RecyclerView. It only loads items currently visible on screen, saving memory and keeping scrolling super smooth.",
    props: [
      { name: 'data', type: 'Array', default: 'required', desc: 'Array of data items to render.' },
      { name: 'renderItem', type: 'Function', default: 'required', desc: 'Function rendering individual list row component.' },
      { name: 'keyExtractor', type: 'Function', default: 'required', desc: 'Returns unique key string for each item.' },
      { name: 'ItemSeparatorComponent', type: 'Component', default: 'undefined', desc: 'Renders divider line between rows.' }
    ],
    useCases: [
      'Social media feeds and activity lists',
      'E-commerce product lists',
      'Message thread list views'
    ],
    codeExamples: [
      {
        title: 'Virtualized Feed List Example',
        code: `import { FlatList, Text, View, StyleSheet } from 'react-native';

const USERS = [
  { id: '1', name: 'Sarah Connor', role: 'Architect' },
  { id: '2', name: 'John Doe', role: 'Designer' },
  { id: '3', name: 'Alice Smith', role: 'Engineer' },
];

export default function FlatListExample() {
  return (
    <FlatList
      data={USERS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.role}>{item.role}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  name: { fontSize: 16, fontWeight: '600', color: '#1d1d1f' },
  role: { fontSize: 13, color: '#7a7a7a' },
});`
      }
    ],
    previewType: 'flatlist'
  },
  {
    id: 'sectionlist',
    num: '12',
    name: 'SectionList',
    category: 'Lists',
    tagline: 'Virtualized list component for grouped sectioned data',
    importStatement: "import { SectionList, Text, View } from 'react-native';",
    description: "The SectionList component is like FlatList, but designed for grouped data with sticky headers (like contacts organized by letter A, B, C or transactions grouped by Month). On iPhone (iOS) it maps to sectioned UITableView, and on Android to grouped RecyclerView.",
    props: [
      { name: 'sections', type: 'Array', default: 'required', desc: 'Array of section objects [{ title: "A", data: [...] }].' },
      { name: 'renderSectionHeader', type: 'Function', default: 'required', desc: 'Renders section category header.' },
      { name: 'renderItem', type: 'Function', default: 'required', desc: 'Renders row item in section.' }
    ],
    useCases: [
      'Alphabetical phone contacts directory',
      'Categorized settings screens',
      'Transaction history grouped by date'
    ],
    codeExamples: [
      {
        title: 'SectionList Contact Directory Example',
        code: `import { SectionList, Text, View, StyleSheet } from 'react-native';

const DATA = [
  { title: 'FRUITS', data: ['Apple', 'Banana'] },
  { title: 'VEGETABLES', data: ['Carrot', 'Potato'] },
];

export default function SectionListExample() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, idx) => item + idx}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#f5f5f7', padding: 8, paddingHorizontal: 16 },
  headerTitle: { fontWeight: '600', color: '#0066cc', fontSize: 13 },
  row: { padding: 14, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  rowText: { color: '#1d1d1f' },
});`
      }
    ],
    previewType: 'sectionlist'
  },
  {
    id: 'modal',
    num: '13',
    name: 'Modal',
    category: 'Feedback',
    tagline: 'Overlay container presenting content above active screen',
    importStatement: "import { Modal, View, Text, Pressable } from 'react-native';",
    description: "The Modal component pops up a window or overlay directly on top of your current screen (like confirmation dialogs, bottom menus, or alert popups). On iPhone (iOS) it creates a modal view controller, and on Android a native Dialog window. You can make the backdrop semi-transparent and choose slide or fade opening animations.",
    props: [
      { name: 'visible', type: 'boolean', default: 'false', desc: 'Controls visibility of modal window.' },
      { name: 'animationType', type: "'slide'|'fade'|'none'", default: "'none'", desc: 'Transition opening/closing animation.' },
      { name: 'transparent', type: 'boolean', default: 'false', desc: 'Renders modal over semi-transparent dim backdrop.' },
      { name: 'onRequestClose', type: 'Function', default: 'undefined', desc: 'Android hardware back button listener.' }
    ],
    useCases: [
      'Confirmation dialog windows',
      'Bottom sheet filter menus',
      'Full-screen preview viewers'
    ],
    codeExamples: [
      {
        title: 'Modal Dialog Window Example',
        code: `import { useState } from 'react';
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';

export default function ModalExample() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.center}>
      <Pressable style={styles.openBtn} onPress={() => setVisible(true)}>
        <Text style={styles.btnText}>Open Modal</Text>
      </Pressable>

      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.backdrop}>
          <View style={styles.card}>
            <Text style={styles.title}>Modal Header</Text>
            <Text style={styles.body}>Renders on top of screen content.</Text>
            <Pressable style={styles.closeBtn} onPress={() => setVisible(false)}>
              <Text style={styles.closeText}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  openBtn: { backgroundColor: '#0066cc', padding: 12, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '600' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  card: { width: '80%', backgroundColor: '#fff', padding: 20, borderRadius: 12, gap: 10 },
  title: { fontSize: 18, fontWeight: '600', color: '#1d1d1f' },
  body: { color: '#7a7a7a' },
  closeBtn: { backgroundColor: '#1d1d1f', padding: 10, borderRadius: 6, alignItems: 'center' },
  closeText: { color: '#fff', fontWeight: '600' },
});`
      }
    ],
    previewType: 'modal'
  },
  {
    id: 'activityindicator',
    num: '14',
    name: 'ActivityIndicator',
    category: 'Feedback',
    tagline: 'Circular spinner loading indicator component',
    importStatement: "import { ActivityIndicator, View } from 'react-native';",
    description: "The ActivityIndicator component shows a spinning circular loading wheel while your app is fetching data from a server or loading a page. On iPhone (iOS) it maps to UIActivityIndicatorView, and on Android to ProgressBar. You can customize its size ('small' or 'large') and spinner color.",
    props: [
      { name: 'size', type: "'small'|'large'|number", default: "'small'", desc: 'Size of spinning wheel.' },
      { name: 'color', type: 'string', default: 'platform default', desc: 'Color hex string.' },
      { name: 'animating', type: 'boolean', default: 'true', desc: 'Shows or hides indicator.' }
    ],
    useCases: [
      'Async API fetch loading states',
      'Image loading placeholders',
      'Form submit progress indicators'
    ],
    codeExamples: [
      {
        title: 'ActivityIndicator Loading Spinner Example',
        code: `import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

export default function IndicatorExample() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0066cc" />
      <Text style={styles.text}>Fetching feed data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, alignItems: 'center', gap: 12 },
  text: { color: '#7a7a7a', fontSize: 14 },
});`
      }
    ],
    previewType: 'activityindicator'
  },
  {
    id: 'switch',
    num: '15',
    name: 'Switch',
    category: 'Feedback',
    tagline: 'Boolean on/off toggle switch component',
    importStatement: "import { Switch, View } from 'react-native';",
    description: "The Switch component renders a native boolean ON/OFF toggle switch (used for settings like Dark Mode or Push Notifications). On iPhone (iOS) it turns into a green iOS switch (UISwitch), and on Android into a Material switch (SwitchCompat).",
    props: [
      { name: 'value', type: 'boolean', default: 'false', desc: 'Current boolean toggle state.' },
      { name: 'onValueChange', type: 'Function', default: 'undefined', desc: 'Callback invoked when toggle is switched.' },
      { name: 'trackColor', type: '{ false, true }', default: 'undefined', desc: 'Custom background track colors.' },
      { name: 'thumbColor', type: 'string', default: 'undefined', desc: 'Color of sliding circle thumb.' }
    ],
    useCases: [
      'Settings toggle options (Push Notifications, Dark Mode)',
      'Privacy and security preferences'
    ],
    codeExamples: [
      {
        title: 'Settings Switch Toggle Example',
        code: `import { useState } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

export default function SwitchExample() {
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>Push Notifications</Text>
      <Switch
        value={enabled}
        onValueChange={setEnabled}
        trackColor={{ false: '#d1d1d6', true: '#34c759' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderRadius: 8 },
  label: { fontSize: 16, fontWeight: '500', color: '#1d1d1f' },
});`
      }
    ],
    previewType: 'switch'
  },
  {
    id: 'refreshcontrol',
    num: '16',
    name: 'RefreshControl',
    category: 'Feedback',
    tagline: 'Pull-to-refresh control used inside ScrollView or FlatList',
    importStatement: "import { RefreshControl, FlatList } from 'react-native';",
    description: "The RefreshControl component adds pull-to-refresh functionality to a ScrollView or FlatList. When a user pulls down on the list, a spinning loading indicator appears at the top to re-fetch the latest data.",
    props: [
      { name: 'refreshing', type: 'boolean', default: 'required', desc: 'Whether list is actively refreshing.' },
      { name: 'onRefresh', type: 'Function', default: 'required', desc: 'Callback invoked when user pulls down to refresh.' }
    ],
    useCases: [
      'Refreshing news feed timelines',
      'Re-fetching latest weather or stock prices'
    ],
    codeExamples: [
      {
        title: 'Pull to Refresh FlatList Example',
        code: `import { useState } from 'react';
import { FlatList, RefreshControl, Text, StyleSheet } from 'react-native';

export default function RefreshControlExample() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(res => setTimeout(res, 1200));
    setRefreshing(false);
  };

  return (
    <FlatList
      data={['Article 1', 'Article 2', 'Article 3']}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
});`
      }
    ],
    previewType: 'refreshcontrol'
  },
  {
    id: 'keyboardavoidingview',
    num: '17',
    name: 'KeyboardAvoidingView',
    category: 'Layout',
    tagline: 'Automatically adjusts screen layout when soft keyboard opens',
    importStatement: "import { KeyboardAvoidingView, Platform } from 'react-native';",
    description: "The KeyboardAvoidingView component prevents the soft keyboard from covering up text fields at the bottom of the screen. When the keyboard pops up, KeyboardAvoidingView automatically shifts or resizes the screen so your inputs remain clearly visible.",
    props: [
      { name: 'behavior', type: "'padding'|'height'|'position'", default: 'undefined', desc: 'Adjustment mode (padding for iOS, height for Android).' },
      { name: 'keyboardVerticalOffset', type: 'number', default: '0', desc: 'Offset distance from top bar.' }
    ],
    useCases: [
      'Chat messaging input bars at bottom of screen',
      'Form input fields on mobile screens'
    ],
    codeExamples: [
      {
        title: 'Chat Input Keyboard Adjuster Example',
        code: `import { KeyboardAvoidingView, Platform, TextInput, StyleSheet } from 'react-native';

export default function KeyboardExample() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput placeholder="Type a message..." style={styles.input} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-end', padding: 16 },
  input: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 20, padding: 12 },
});`
      }
    ],
    previewType: 'keyboardavoidingview'
  },
  {
    id: 'statusbar',
    num: '18',
    name: 'StatusBar',
    category: 'Feedback',
    tagline: 'Controls device status bar text appearance and translucency',
    importStatement: "import { StatusBar } from 'react-native';",
    description: "The StatusBar component controls the top bar on the phone screen where battery, clock time, and Wi-Fi icons live. You can switch between dark text (dark-content) and light text (light-content) depending on whether your app theme is dark or light.",
    props: [
      { name: 'barStyle', type: "'default'|'light-content'|'dark-content'", default: "'default'", desc: 'Color of status bar icons and clock text.' },
      { name: 'backgroundColor', type: 'string', default: 'undefined', desc: 'Background color of status bar (Android).' }
    ],
    useCases: [
      'Setting light status text on dark screen backgrounds',
      'Hiding status bar in full screen video players'
    ],
    codeExamples: [
      {
        title: 'Dark Theme StatusBar Example',
        code: `import { StatusBar, View, Text, StyleSheet } from 'react-native';

export default function StatusBarExample() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#1d1d1f" />
      <Text style={styles.title}>Dark Mode View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#1d1d1f', padding: 24 },
  title: { color: '#fff', fontSize: 20, fontWeight: '600' },
});`
      }
    ],
    previewType: 'statusbar'
  },
  {
    id: 'safeareaview',
    num: '19',
    name: 'SafeAreaView',
    category: 'Layout',
    tagline: 'Renders content within safe area screen boundaries',
    importStatement: "import { SafeAreaView } from 'react-native-safe-area-context';",
    description: "The SafeAreaView component ensures your app content doesn't get hidden under phone camera notches, speaker cutouts, or bottom home bar indicators on modern iPhones and Android devices. It automatically adds padding around safe screen edges.",
    props: [
      { name: 'style', type: 'ViewStyle', default: 'undefined', desc: 'Container layout styles.' }
    ],
    useCases: [
      'Root layout container wrapper for modern iPhone & Android notch screens'
    ],
    codeExamples: [
      {
        title: 'Safe Area Context Root Wrapper Example',
        code: `import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from 'react-native';

export default function SafeAreaExample() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <Text style={styles.text}>Safe notch-free content!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f5f7', paddingHorizontal: 16 },
  text: { fontSize: 18, color: '#1d1d1f', fontWeight: '600' },
});`
      }
    ],
    previewType: 'safeareaview'
  },
  {
    id: 'imagebackground',
    num: '20',
    name: 'ImageBackground',
    category: 'Core',
    tagline: 'Renders background image with nested child views on top',
    importStatement: "import { ImageBackground, Text } from 'react-native';",
    description: "The ImageBackground component lets you place a picture in the background and display text, buttons, or other components directly on top of it. It is perfect for hero banners, promo cards, and splash onboarding screens.",
    props: [
      { name: 'source', type: 'object|number', default: 'required', desc: 'Background picture source.' },
      { name: 'resizeMode', type: 'string', default: "'cover'", desc: 'Picture scaling mode.' }
    ],
    useCases: [
      'Hero banner cards with text overlays',
      'Custom app onboarding screens'
    ],
    codeExamples: [
      {
        title: 'Hero Banner Card Example',
        code: `import { ImageBackground, Text, View, StyleSheet } from 'react-native';

export default function BackgroundExample() {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/600/300' }}
      style={styles.hero}
      imageStyle={{ borderRadius: 12 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Hero Title</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: { height: 180, justifyContent: 'flex-end' },
  overlay: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 14, borderRadius: 12 },
  title: { color: '#fff', fontSize: 20, fontWeight: '600' },
});`
      }
    ],
    previewType: 'imagebackground'
  },
  {
    id: 'keyboard',
    num: '21',
    name: 'Keyboard API',
    category: 'APIs',
    tagline: 'Imperative utility to dismiss or inspect software keyboard',
    importStatement: "import { Keyboard } from 'react-native';",
    description: "The Keyboard module is a utility API that lets you programmatically control the soft keyboard—such as calling Keyboard.dismiss() to hide the keyboard when a user submits a form or taps a button.",
    props: [],
    useCases: [
      'Dismissing soft keyboard on button submit',
      'Calculating soft keyboard height dynamically'
    ],
    codeExamples: [
      {
        title: 'Keyboard Dismiss Example',
        code: `import { Keyboard, Button, View } from 'react-native';

export default function KeyboardApiExample() {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Dismiss Keyboard" onPress={() => Keyboard.dismiss()} />
    </View>
  );
}
`
      }
    ],
    previewType: 'keyboard'
  },
  {
    id: 'alert',
    num: '22',
    name: 'Alert',
    category: 'APIs',
    tagline: 'Triggers native OS popup alert dialogs with action buttons',
    importStatement: "import { Alert } from 'react-native';",
    description: "The Alert module opens a native OS alert popup with a title, description text, and interactive buttons (like 'Cancel' and 'Delete'). On iPhone (iOS) it opens a UIAlertController dialog, and on Android an AlertDialog window.",
    props: [],
    useCases: [
      'Action confirmation dialogs (Delete Account)',
      'Error message alerts'
    ],
    codeExamples: [
      {
        title: 'Confirmation Dialog Alert Example',
        code: `import { Alert, Button, View } from 'react-native';

export default function AlertExample() {
  const showConfirm = () => {
    Alert.alert(
      'Delete Post?',
      'This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => Alert.alert('Deleted', 'The post was successfully removed.') }
      ]
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Delete Item" color="#dc2626" onPress={showConfirm} />
    </View>
  );
}
`
      }
    ],
    previewType: 'alert'
  },
  {
    id: 'linking',
    num: '23',
    name: 'Linking',
    category: 'APIs',
    tagline: 'Opens external web URLs or app deep links',
    importStatement: "import { Linking } from 'react-native';",
    description: "The Linking module is an API that lets your app interact with external links. You can use Linking.openURL('https://...') to open a web browser, make a phone call (tel:123456), send an email (mailto:), or open other native apps via deep links.",
    props: [],
    useCases: [
      'Opening web browser documentation links',
      'Launching phone dialer or email client'
    ],
    codeExamples: [
      {
        title: 'Open External URL Example',
        code: `import { Linking, Button, View } from 'react-native';

export default function LinkingExample() {
  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Open Docs Website"
        onPress={() => Linking.openURL('https://reactnative.dev')}
      />
    </View>
  );
}
`
      }
    ],
    previewType: 'linking'
  },
  {
    id: 'share',
    num: '24',
    name: 'Share',
    category: 'APIs',
    tagline: 'Opens system share sheet dialog for sending text or URLs',
    importStatement: "import { Share } from 'react-native';",
    description: "The Share module opens the phone's native Share Sheet dialog (allowing users to easily share text, links, or media to apps like Messages, WhatsApp, Mail, or Twitter).",
    props: [],
    useCases: [
      'Sharing referral codes or app invitation links',
      'Exporting content snippets'
    ],
    codeExamples: [
      {
        title: 'System Share Sheet Example',
        code: `import { Share, Button, View } from 'react-native';

export default function ShareExample() {
  const handleShare = async () => {
    await Share.share({
      message: 'Check out React Native Documentation Hub!',
      url: 'https://reactnative.dev'
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Share Link" onPress={handleShare} />
    </View>
  );
}
`
      }
    ],
    previewType: 'share'
  },
  {
    id: 'dimensions',
    num: '25',
    name: 'useWindowDimensions',
    category: 'APIs',
    tagline: 'Hook for responsive screen width, height, and font scale updates',
    importStatement: "import { useWindowDimensions } from 'react-native';",
    description: "The useWindowDimensions React hook gives you the exact width and height of the phone screen in real time. If the user rotates their phone from portrait to landscape, this hook automatically updates so your layout can adapt responsively.",
    props: [],
    useCases: [
      'Responsive mobile vs tablet column layout switching',
      'Calculating dynamic image aspect ratios'
    ],
    codeExamples: [
      {
        title: 'Responsive Window Hook Example',
        code: `import { useWindowDimensions, Text, View, StyleSheet } from 'react-native';

export default function DimensionsExample() {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen Width: {Math.round(width)}px</Text>
      <Text style={styles.text}>Mode: {isTablet ? 'Tablet' : 'Phone'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 6 },
  text: { fontSize: 15, color: '#1d1d1f' },
});`
      }
    ],
    previewType: 'dimensions'
  },
  {
    id: 'platform',
    num: '26',
    name: 'Platform',
    category: 'APIs',
    tagline: 'Detects OS (iOS / Android) and applies platform-specific logic',
    importStatement: "import { Platform } from 'react-native';",
    description: "The Platform module tells your app whether it is currently running on iOS (Platform.OS === 'ios') or Android (Platform.OS === 'android'). It allows you to write simple conditional logic or apply different styles for iOS and Android.",
    props: [],
    useCases: [
      'Platform specific shadow definitions (elevation on Android vs shadowColor on iOS)',
      'Selective component behavior'
    ],
    codeExamples: [
      {
        title: 'Platform Select Utility Example',
        code: `import { Platform, Text, View, StyleSheet } from 'react-native';

export default function PlatformExample() {
  const label = Platform.select({
    ios: 'Running on Apple iOS',
    android: 'Running on Google Android',
    default: 'Running elsewhere'
  });

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6 },
      android: { elevation: 3 }
    })
  },
  text: { color: '#1d1d1f', fontWeight: '500' },
});`
      }
    ],
    previewType: 'platform'
  },
  {
    id: 'animated',
    num: '27',
    name: 'Animated',
    category: 'Animation',
    tagline: 'Built-in animation engine for smooth 60 FPS UI transitions',
    importStatement: "import { Animated } from 'react-native';",
    description: "The Animated API is React Native's built-in animation engine. It lets you create smooth 60 FPS animations for fading opacity, sliding menus, scaling buttons, and spring physics off the JavaScript main thread for maximum performance.",
    props: [],
    useCases: [
      'Fade in / fade out modal overlays',
      'Slide-in drawer panels',
      'Interactive card swipe gestures'
    ],
    codeExamples: [
      {
        title: 'Fade-in Timing Animation Example',
        code: `import { useRef } from 'react';
import { Animated, Button, View, StyleSheet } from 'react-native';

export default function AnimatedExample() {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity }]} />
      <Button title="Fade In Box" onPress={fadeIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 16 },
  box: { width: 80, height: 80, backgroundColor: '#0066cc', borderRadius: 12 },
});`
      }
    ],
    previewType: 'animated'
  },
  {
    id: 'usestate',
    num: '28',
    name: 'useState',
    category: 'Hooks',
    tagline: 'State hook for declaring reactive component state and updater functions',
    importStatement: "import { useState } from 'react';",
    description: "useState is the core React hook for storing and updating reactive state inside functional components. Calling useState(initialValue) returns a tuple with the current state and a setter function. When the setter is invoked, React re-renders the component to reflect the new state in the UI.",
    props: [
      { name: 'initialState', type: 'any|Function', default: 'undefined', desc: 'Initial value or lazy calculation function.' },
      { name: 'returns', type: '[state, setState]', default: 'tuple', desc: 'Returns state value and dispatcher function.' }
    ],
    useCases: [
      'Managing form input values, modal visibility, and counter numbers',
      'Toggling UI active states, dark/light themes, and tab selections'
    ],
    codeExamples: [
      {
        title: 'Interactive State Counter Example',
        code: `import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.btnRow}>
        <Button title="Decrement" onPress={() => setCount(c => c - 1)} color="#fc424a" />
        <Button title="Increment" onPress={() => setCount(c => c + 1)} color="#00d25b" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 16 },
  counterText: { fontSize: 24, fontWeight: '700', color: '#1d1d1f' },
  btnRow: { flexDirection: 'row', gap: 12 },
});`
      }
    ],
    previewType: 'usestate'
  },
  {
    id: 'useeffect',
    num: '29',
    name: 'useEffect',
    category: 'Hooks',
    tagline: 'Effect hook for handling side effects like subscriptions, timers, and data fetching',
    importStatement: "import { useEffect, useState } from 'react';",
    description: "useEffect lets you perform side-effects in functional components after rendering. Common use cases include fetching data from a REST API, listening to device hardware events, or setting up interval timers. It takes an effect function and a dependency array to control when the effect triggers and cleans up.",
    props: [
      { name: 'setupFunction', type: 'Function', default: 'required', desc: 'Function containing side-effect logic. Can return a cleanup function.' },
      { name: 'dependencies', type: 'Array', default: 'undefined', desc: 'Triggers effect execution when values change. Empty array [] runs once on mount.' }
    ],
    useCases: [
      'Fetching REST API data when a component mounts',
      'Setting up timer intervals and event listeners with cleanup'
    ],
    codeExamples: [
      {
        title: 'Timer Interval & Cleanup Example',
        code: `import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UseEffectExample() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Elapsed Time: {seconds}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  text: { fontSize: 18, color: '#0066cc', fontWeight: '600' },
});`
      }
    ],
    previewType: 'useeffect'
  },
  {
    id: 'usecontext',
    num: '30',
    name: 'useContext',
    category: 'Hooks',
    tagline: 'Hook for consuming global context values without prop drilling',
    importStatement: "import { useContext } from 'react';",
    description: "useContext accepts a React Context object (created via createContext) and returns the current context value provided by the nearest <Context.Provider> above in the component tree. It eliminates manual prop drilling across deeply nested component hierarchies.",
    props: [
      { name: 'SomeContext', type: 'ReactContext', default: 'required', desc: 'Context object returned by createContext.' }
    ],
    useCases: [
      'Reading app-wide user session authentication tokens',
      'Accessing global theme tokens (Light/Dark mode) or localization strings'
    ],
    codeExamples: [
      {
        title: 'Theme Context Consumer Example',
        code: `import { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export default function App() {
  const [theme, setTheme] = useState('dark');
  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <ChildCard />
    </ThemeContext.Provider>
  );
}

function ChildCard() {
  const { theme, toggle } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <View style={[styles.card, isDark && styles.darkCard]}>
      <Text style={[styles.text, isDark && styles.darkText]}>Current Theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={toggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, backgroundColor: '#f5f5f7', borderRadius: 8, gap: 12 },
  darkCard: { backgroundColor: '#1c1c1e' },
  text: { fontSize: 16, color: '#1d1d1f' },
  darkText: { color: '#ffffff' },
});`
      }
    ],
    previewType: 'usecontext'
  },
  {
    id: 'usememo',
    num: '31',
    name: 'useMemo',
    category: 'Hooks',
    tagline: 'Performance hook for caching expensive calculation results between renders',
    importStatement: "import { useMemo } from 'react';",
    description: "useMemo memoizes the result of a calculation between re-renders. It will only recompute the cached value when one of its dependencies changes. This optimizes performance by preventing CPU-heavy filtering, sorting, or computations on every render.",
    props: [
      { name: 'calculateValue', type: 'Function', default: 'required', desc: 'Pure calculation function returning memoized result.' },
      { name: 'dependencies', type: 'Array', default: 'required', desc: 'Array of reactive dependencies that trigger recalculation.' }
    ],
    useCases: [
      'Caching sorted/filtered arrays in large search list views',
      'Preventing expensive mathematical transformation routines on render'
    ],
    codeExamples: [
      {
        title: 'Memoized Calculation Example',
        code: `import { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UseMemoExample() {
  const [count, setCount] = useState(5);
  const [text, setText] = useState('React');

  // Expensive calculation cached with useMemo
  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= count; i++) result *= i;
    return result;
  }, [count]);

  return (
    <View style={styles.box}>
      <Text style={styles.val}>Factorial of {count}: {factorial}</Text>
      <Button title="Increase Number" onPress={() => setCount(c => c + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, gap: 12 },
  val: { fontSize: 18, fontWeight: '600', color: '#1d1d1f' },
});`
      }
    ],
    previewType: 'usememo'
  },
  {
    id: 'usecallback',
    num: '32',
    name: 'useCallback',
    category: 'Hooks',
    tagline: 'Performance hook for caching function instances between renders',
    importStatement: "import { useCallback } from 'react';",
    description: "useCallback caches a function definition between component re-renders. When passing callbacks down to optimized child components that rely on shallow prop comparison (like React.memo), useCallback prevents unwanted child re-renders caused by new function references.",
    props: [
      { name: 'fn', type: 'Function', default: 'required', desc: 'Callback function definition to memoize.' },
      { name: 'dependencies', type: 'Array', default: 'required', desc: 'Array of dependencies that recreate the function instance when changed.' }
    ],
    useCases: [
      'Passing event handlers to memoized list item components',
      'Optimizing custom hook event dispatchers'
    ],
    codeExamples: [
      {
        title: 'Memoized Callback Handler Example',
        code: `import { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UseCallbackExample() {
  const [items, setItems] = useState(['Apple', 'Banana']);

  const addItem = useCallback(() => {
    setItems(prev => [...prev, \`Item #\${prev.length + 1}\`]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items: {items.join(', ')}</Text>
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 12 },
  title: { fontSize: 16, color: '#1d1d1f' },
});`
      }
    ],
    previewType: 'usecallback'
  },
  {
    id: 'useref',
    num: '33',
    name: 'useRef',
    category: 'Hooks',
    tagline: 'Hook for persisting mutable values or referencing native DOM/UI nodes without re-rendering',
    importStatement: "import { useRef } from 'react';",
    description: "useRef returns a mutable object whose .current property persists across re-renders without triggering a re-render when changed. It is primarily used to hold references to native component nodes (like calling TextInput.focus()) or keeping instance variables like timer IDs.",
    props: [
      { name: 'initialValue', type: 'any', default: 'undefined', desc: 'Initial value set to refObject.current.' }
    ],
    useCases: [
      'Programmatically focusing text inputs or scrolling scrollviews',
      'Storing timer IDs, previous props, or render counts without triggering UI updates'
    ],
    codeExamples: [
      {
        title: 'Focus TextInput Ref Example',
        code: `import { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.box}>
      <TextInput ref={inputRef} placeholder="Tap button to focus me..." style={styles.input} />
      <Button title="Focus Field" onPress={focusInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, gap: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
});`
      }
    ],
    previewType: 'useref'
  },
  {
    id: 'createcontext',
    num: '34',
    name: 'createContext',
    category: 'React',
    tagline: 'Factory function for creating global Context objects for dependency injection',
    importStatement: "import { createContext } from 'react';",
    description: "createContext creates a React Context object. When React renders a component subscribing to this Context, it reads the current context value from the closest matching <Context.Provider> above it in the component tree.",
    props: [
      { name: 'defaultValue', type: 'any', default: 'undefined', desc: 'Fallback default context value when no matching Provider is found.' }
    ],
    useCases: [
      'Creating global state containers (Auth, Theme, Cart State)',
      'Injecting dependency services across app modules'
    ],
    codeExamples: [
      {
        title: 'Global Auth Context Creation Example',
        code: `import { createContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

export const UserContext = createContext({ user: null, login: () => {} });

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, login: () => setUser({ name: 'Satyam' }) }}>
      {children}
    </UserContext.Provider>
  );
}`
      }
    ],
    previewType: 'createcontext'
  },
  {
    id: 'memo',
    num: '35',
    name: 'memo',
    category: 'React',
    tagline: 'Higher-order component for skipping re-renders when props are unchanged',
    importStatement: "import { memo } from 'react';",
    description: "React.memo is a higher-order component that wraps a component to skip re-rendering if its props have not changed. It performs a shallow comparison of props, significantly boosting list rendering performance.",
    props: [
      { name: 'Component', type: 'Component', default: 'required', desc: 'Functional component to memoize.' },
      { name: 'arePropsEqual', type: 'Function', default: 'undefined', desc: 'Optional custom prop equality comparator function (prevProps, nextProps).' }
    ],
    useCases: [
      'Optimizing FlatList row items from re-rendering during list updates',
      'Preventing heavy static UI cards from re-rendering on parent state changes'
    ],
    codeExamples: [
      {
        title: 'Memoized Component Example',
        code: `import { memo, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HeavyCard = memo(function HeavyCard({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
});

export default function MemoExample() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.box}>
      <Button title={\`Re-render Parent (\${count})\`} onPress={() => setCount(c => c + 1)} />
      <HeavyCard title="I only render when props change!" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, gap: 12 },
  card: { padding: 16, backgroundColor: '#0066cc', borderRadius: 8 },
  text: { color: '#ffffff', fontWeight: '600' },
});`
      }
    ],
    previewType: 'memo'
  },
  {
    id: 'lazy',
    num: '36',
    name: 'lazy',
    category: 'React',
    tagline: 'Function for code-splitting components and loading them dynamically on demand',
    importStatement: "import { lazy, Suspense } from 'react';",
    description: "React.lazy lets you defer loading component code until it is rendered for the first time. Combined with dynamic imports import(), it splits app bundle size for faster initial load times.",
    props: [
      { name: 'loadFunction', type: 'Function', default: 'required', desc: 'Function calling dynamic import() returning a Promise resolving to a module.' }
    ],
    useCases: [
      'Lazy loading heavy modal dialogs or chart screens',
      'Splitting optional feature modules into dynamic bundles'
    ],
    codeExamples: [
      {
        title: 'Lazy Loaded Component Example',
        code: `import { lazy, Suspense, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

// Dynamic import component
const ExtraDetails = lazy(() => new Promise(res => {
  setTimeout(() => res({ default: () => <Text style={{ color: '#00d25b' }}>Lazy Component Loaded!</Text> }), 1500);
}));

export default function LazyExample() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.box}>
      <Button title="Load Module On Demand" onPress={() => setShow(true)} />
      {show && (
        <Suspense fallback={<ActivityIndicator color="#0066cc" />}>
          <ExtraDetails />
        </Suspense>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, alignItems: 'center', gap: 16 },
});`
      }
    ],
    previewType: 'lazy'
  },
  {
    id: 'suspense',
    num: '37',
    name: 'Suspense',
    category: 'React',
    tagline: 'Boundary component that displays fallback UI while child components are loading',
    importStatement: "import { Suspense } from 'react';",
    description: "Suspense lets you display a fallback UI (like a loading spinner or skeleton placeholder) while its child components are fetching data or loading dynamic code bundles.",
    props: [
      { name: 'fallback', type: 'ReactNode', default: 'required', desc: 'Fallback loader node rendered while child components suspend.' }
    ],
    useCases: [
      'Displaying skeleton loaders while data or lazy modules resolve',
      'Coordinating asynchronous loading boundaries across screen sections'
    ],
    codeExamples: [
      {
        title: 'Suspense Fallback Boundary Example',
        code: `import { Suspense } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function SuspenseExample() {
  return (
    <View style={styles.container}>
      <Suspense fallback={<ActivityIndicator size="large" color="#8f5fe8" />}>
        <Text style={styles.loadedText}>Suspense Async Boundary Ready!</Text>
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, alignItems: 'center' },
  loadedText: { fontSize: 16, fontWeight: '600', color: '#8f5fe8' },
});`
      }
    ],
    previewType: 'suspense'
  }
];

