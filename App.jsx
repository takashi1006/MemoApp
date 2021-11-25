import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Memo App</Text>
          <Text style={styles.appBarLight}>ログアウト</Text>
        </View>
      </View>
      {/* メモリスト */}
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>メモタイトル</Text>
            <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>メモタイトル</Text>
            <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>メモタイトル</Text>
            <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/* メモリスト end */}
      {/* addBtn */}
      <View style={styles.addCircleMemoBtn}>
        <Text style={styles.circleBtnLabel}>+</Text>
      </View>
      {/* addBtn end */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appBar: {
    backgroundColor: '#467FD3',
    width: '100%',
    height: 104,
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appBarLight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    color: '#848484',
    fontSize: 12,
    lineHeight: 16,
  },
  addCircleMemoBtn: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // shadowはiOSのみ対応
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevationはandroidのみ
    elevation: 8,
  },
  circleBtnLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});

export default App;
