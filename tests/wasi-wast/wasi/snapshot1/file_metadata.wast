(wasi_test "file_metadata.wasm"
  (preopens "test_fs")
  (assert_return (i64.const 0))
  (assert_stdout "is dir: false\nfiletype: false true false\nfile info: 8866\n")
)