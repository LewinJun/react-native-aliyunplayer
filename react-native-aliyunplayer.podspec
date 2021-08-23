require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-aliyunplayer"
  s.version      = package["version"]
  s.summary      = "Expose config variables to React Native apps"
  s.author       = "Pedro Belo"

  s.homepage     = "https://github.com/LewinJun/react-native-aliyunplayer"

  s.license      = "MIT"
  s.ios.deployment_target = "9.0"
  s.tvos.deployment_target = "9.0"

  s.source       = { :git => "https://github.com/LewinJun/react-native-aliyunplayer.git", :tag => "#{s.version}" }

  s.source_files  = "ios/AliyunPlayer/**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency 'AliPlayerSDK_iOS'
end
