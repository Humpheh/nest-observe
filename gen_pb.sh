# Use this to regenerate the js files for the protobuf specs
# This file works on Windows...

protoc -I=protobuf/pb \
  --plugin="protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd" \
  --js_out="import_style=commonjs,binary:protobuf/js" \
  --ts_out="protobuf/js" \
  nest.gateway.proto streambody.proto \
  nest.hvac.proto nest.sensor.proto nest.located.proto nest.service.proto nest.structure.proto \
  weave.description.proto weave.common.proto
  
protoc -I=protobuf/pb \
  --plugin="protoc-gen-ts=node_modules\.bin\protoc-gen-ts.cmd" \
  --js_out="import_style=commonjs,binary:protobuf/js" \
  --ts_out="service=grpc-web:protobuf/js" \
  nest.gateway.proto
